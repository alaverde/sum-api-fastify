const calculator = require('../services/calculator.service');

exports.sum = (request, reply) => {
    const sumResult = calculator.sum(
        +request.body.paramone,
        +request.body.paramtwo);

    const params = {
        result : sumResult
    }

    return params;
}