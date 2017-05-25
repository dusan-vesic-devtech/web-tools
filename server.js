'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

// my imports
const dnsController = require('./controllers/dnsController');
const hashController = require('./controllers/hashController');

server.connection({
  port: process.env.PORT || 3000,
  routes: { cors: true }
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
  path: '/{param*}',
  handler: {
    directory: {
      path: 'public'
    }
  }
});

/* test route */
server.route({
  method: 'GET',
  path: '/time',
  handler: function (request, reply) {
    reply({time: +new Date()});
  }
});

server.route({
  method: 'GET',
  path: '/tools/dns',
  handler: function (request, reply) {
    let url = encodeURIComponent(request.query.url);
    async function all() {
      try {
        let a = await dnsController.getA(url);
        let aaaa = await dnsController.getAAAA(url);
        let cname = await dnsController.getCName(url);
        let ns = await dnsController.getNs(url);
        let nameServers = await dnsController.getServers(url);
        reply({ a, aaaa, cname, ns, nameServers })
      } catch (e) {
        console.log(e);
        reply({ e })
      }
    }
    all();
  }
});

server.route({
  method: 'GET',
  path: '/tools/md5/{valueToHash}',
  handler: function (request, reply) {
    let valueToHash = encodeURIComponent(request.params.valueToHash);
    valueToHash = hashController.md5Hash(valueToHash);
    reply({md5: valueToHash});
  }
});

server.route({
  method: 'GET',
  path: '/tools/sha1/{valueToHash}',
  handler: function (request, reply) {
    let valueToHash = encodeURIComponent(request.params.valueToHash);
    valueToHash = hashController.sha1Hash(valueToHash);
    reply({sha1: valueToHash});
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});