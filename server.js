const fastify = require('fastify')({ logger: true });
const config = require('./config/global.config');
const sumRoute = require('./routes/sum.route');

fastify.register(require('fastify-formbody'));

fastify.route(sumRoute);

const start = async () => {
  try {
    await fastify.listen(config.port)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()