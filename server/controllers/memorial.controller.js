const Memorial = require("../models/Memorial");

class MemorialController {
  static async getMemorialList(req, res, next) {
    try {
      return Memorial.find((error, data) =>
        error ? next(error) : res.status(200).json(data)
      );
    } catch (error) {
      next(error);
    }
  };

  static async addMemorial(req, res, next) {
    try {
      let newMemorial = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        country: req.body.country,
        flag: req.body.flag,
        dateBirth: req.body.dateBirth,
        dateDie: req.body.dateDie,
        lifeSummary: req.body.lifeSummary,
        file: req.body.file,
      };

      Memorial.create(newMemorial, (error, data) => {
        if (error) {
            console.log(error);
            res.status(409).json({
              success: false,
              message: "Failed to add new memorial page"
            });
          } else {
            res.status(200).json({
              success: true,
              message: "Memorial added successfuly",
              memorialData: data
              //change data response
            });
          }
      });

    } catch (error) {
      next(error);
    }
  }
}

module.exports = MemorialController;
