// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' });
});

fastify.get('/test', function (request, reply) {
  reply.send({ test: 'testy test' });
});

fastify.get('/example', function (request, reply) {
  reply.send({ example: 'example route' });
});

fastify.get('/foo', function (request, reply) {
  reply.send({ foo: 'foooooooo' });
});

fastify.get('/baz', function (request, reply) {
  reply.send({ baz: 'bazzzzzzz' });
});

// Run the server!!!!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Making erroneous change
  fastify.log.info(`Server listening on ${address}`);
});
