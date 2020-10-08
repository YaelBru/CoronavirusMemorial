const Memorial = require("../models/Memorial");
const Tribute = require("../models/Tribute");

class TributesController {
  static async getTributesList(req, res, next) {
    try {
      let personId = req.query.personId;
      let selectedMemorial = await Memorial.findOne({ _id: personId });
      let tributes = await Tribute.find({ personId: personId });

      if (!selectedMemorial) {
        res.status(401).json({
          success: false,
          message: "Memorial not found",
        });
      } else {
        res.status(200).json({
          success: true,
          tributes: tributes,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async addTribute(req, res, next) {
    try {
      console.log(req.body);
      let newTribute = {
        personId: req.body.personId,
        initiator: req.body.initiator,
        country: req.body.country,
        flag: req.body.flag,
        text: req.body.text,
      };

      Tribute.create(newTribute, (error, data) => {
        if (error) {
          res.status(409).json({
            success: false,
            message: "Failed to add tribute",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Tribute added successfuly",
            tribute: data,
          });
        }
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TributesController;
