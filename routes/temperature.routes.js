const router = require("express").Router();
const TemperatureVO = require ('../valueobjects/temperature.vo');

router.post("/v1/temperature/convert", (request, response) => {
    const input = request.body;
    console.log(input);
 
    const temperature = new TemperatureVO(20, "CELSIUS");

    response.send(temperature).status(200);
 });

 module.exports = router;