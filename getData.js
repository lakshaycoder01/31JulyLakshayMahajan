const fs = require('fs');
const JSONStream = require('JSONStream');
const es = require('event-stream');


var getStream = function () {
    var jsonData = 'data.json',
        stream = fs.createReadStream(jsonData, { encoding: 'utf8' }),
        parser = JSONStream.parse('*');
    return stream.pipe(parser);
};


var BMICalculate = function() {
    getStream()
    .pipe(es.mapSync(function (data) {

        let heightM = data["HeightCm"]/100
        console.log(heightM)
        
        let BMI = data["WeightKg"] / (heightM * heightM)
        let roundBMI = BMI.toFixed(2)
        console.log(roundBMI)
        

        switch (true) {
            case BMI < 18.5:
                console.log( "Malnutrition risk")
                break
            case BMI == 24:
                console.log("Low risk")
                break
            case BMI >= 25 && BMI <= 29.9:
                console.log("Enhanced Risk")
                break
            case BMI >= 30 && BMI <= 34.9:
                console.log("Medium risk")
                break
            case BMI >= 35 && BMI <= 39.9:
                console.log("High risk")
                break
            case BMI >= 40:
                console.log("Very high risk")
                break
            default:
                console.log("Low risk")
                break
        }
    }));
}

BMICalculate()