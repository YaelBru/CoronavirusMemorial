import {isPlatformBrowser} from '@angular/common';
import {Component, ElementRef, Inject, PLATFORM_ID, Renderer2} from '@angular/core';

@Component({
  selector: 'app-google-analytics-gtag',
  template: '',
})
export class GoogleAnalyticsGTagComponent {
  trackingCode = 'UA-162380664-1';

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object, private readonly renderer: Renderer2, private readonly el: ElementRef) {
    // BROWSER
    if (isPlatformBrowser(this.platformId)) {
      const script = this.renderer.createElement('script') as HTMLScriptElement;
      script.src = `//www.googletagmanager.com/gtag/js?id=UA-162380664-1`;
      script.async = true;
      this.renderer.appendChild(this.el.nativeElement, script);

      const script2 = this.renderer.createElement('script') as HTMLScriptElement;
      const scriptBody = this.renderer.createText(`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-162380664-1');
      `);
      this.renderer.appendChild(script2, scriptBody);
      this.renderer.appendChild(this.el.nativeElement, script2);
    }
  }
}

