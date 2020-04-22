const calculator = require('../controllers/sum.controller');

const sumRoute = {
    method: 'POST',
    url: '/api/calculator/sum',
    schema: {
      body: {
        paramone: { type: 'number' },
        paramtwo: { type: 'number' },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            result: { 
                type: 'number' 
            }
          }
        }
      }
    },
    // this function is executed for every request before the handler is executed
    beforeHandler: async (request, reply) => {
      // E.g. check authentication
    },
    handler: async (request, reply) => {
        return calculator.sum(request, reply)
    }
  }

module.exports = sumRoute;