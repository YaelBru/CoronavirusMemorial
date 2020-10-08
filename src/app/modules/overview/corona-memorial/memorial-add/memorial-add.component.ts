import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { OverviewService } from '../../overview.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-memorial-add',
  templateUrl: './memorial-add.component.html',
  styleUrls: ['./memorial-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemorialAddComponent implements OnInit {

  addPersonForm: FormGroup;

  countries = [];
  imgSrc;
  minDate: Date;
  maxDate: Date;
  image: boolean = true;
  submit: boolean = false;
  sending: boolean = false;
  error: boolean = false;
  message: string;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef,
    private overviewService: OverviewService,
    public dialogRef: MatDialogRef<MemorialAddComponent>
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 118, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit() {
    this.countries = this.overviewService.getFlags();
    console.log(this.countries);
    this.createForm();
  }

  createForm() {
    this.addPersonForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      country: ['', [Validators.required]],
      flag: [''],
      dateBirth: [''],
      dateDie: [''],
      lifeSummary: [''],
      email: [''],
      password: [''],
      file: [null, [Validators.required]]
    });
  }

  chooseCountry(event) {
    this.addPersonForm.get('country').setValue(event, {
      onlySelf: true
    });

    const countryFlag = this.countries.find((flag) => flag.name === event);
    this.addPersonForm.get('flag').setValue(countryFlag.code || '', {
      onlySelf: true
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = async () => {
        const compressedImage = await this.compressImage(reader.result, 200, 200);

        this.addPersonForm.patchValue({
          file: compressedImage
        });

        this.imgSrc = reader.result;
        this.cd.markForCheck();
      };
    }
    this.image = true;
  }


  compressImage(src, newX, newY) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      };
      img.onerror = error => rej(error);
    });
  }

  onSubmit() {
    if (!this.addPersonForm.valid) {
      if (this.addPersonForm.get('file').value === null) {
        this.image = false
      }
      return false;
    } else {
      this.submit = true;
      this.sending = true;
      this.overviewService.addPerson(this.addPersonForm.value).subscribe(res => {
        this.dialogRef.close();
      },
      (error) => {
        this.sending = false;
        this.error = true;
        this.message = 'We’ve encountered an error. Reload the page and try again. If the error persists, please contact us.'
      });
    }
  }

  backToAddPersonForm() {
    this.submit = false;
    this.sending = false;
    this.error = false;
  }
}
