const TemperatureVO = require ('../valueobjects/temperature.vo');
const { validationResult } = require('express-validator');

/**
 * Convert the given temperature to the specified unit
 * @param {Request} req - Temperature to be converted
 * @param {Response} res - Converted temperature
 */
exports.postConvertTemperature = function (req, res) {    
    let result = validationResult(req);

    if (result.errors.length > 0) {
        res.status(400).json({ success: false, error: result });
    } else {
        const input = req.body;
        console.log(input);
        const temperature = new TemperatureVO(20, "CELSIUS");
        res.json(temperature).status(200);
    }
};