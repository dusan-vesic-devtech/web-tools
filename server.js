const Hapi = require('hapi');
const server = new Hapi.Server();
const dns = require('dns');

server.connection({
  port: process.env.PORT || 3000,
});

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('./public/index.html');
    }
  });
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.route({
  method: 'GET',
  path: '/tools/dns',
  handler: function (request, reply) {
    let url = encodeURIComponent(request.query.url);
    dns.resolve4(url, (err, addresses) => {
      if (err) reply(err);
      if (!addresses) reply({message: 'No record found'});
      reply({'A': addresses});
    });
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});