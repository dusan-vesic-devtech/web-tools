'use strict';

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

    function getServers() {
      return new Promise((res, rej) => {
        res(dns.getServers());
      })
    }

    function getA() {
      return new Promise((res, rej) => {
        dns.resolve4(url, (err, addresses) => {
          if (err) res({err});
          res(addresses);
        })
      })
    }

    function getAAAA() {
      return new Promise((res, rej) => {
        dns.resolve6(url, (err, addresses) => {
          if (err) res({err});
          res(addresses);
        })
      })
    }

    function getCName() {
      return new Promise((res, rej) => {
        dns.resolveCname(url, (err, addresses) => {
          if (err) res({err});
          res(addresses);
        })
      })
    }

    function getNs() {
      return new Promise((res, rej) => {
        dns.resolveNs(url, (err, addresses) => {
          if (err) res({err});
          res(addresses);
        })
      })
    }

    async function all() {
      try {
        let a = await getA();
        let aaaa = await getAAAA();
        let cname = await getCName();
        let ns = await getNs();
        let nameServers = await getServers();
        reply({a, aaaa, cname, ns, nameServers})
      } catch (e) {
        replay({e})
      }
    }

    all();
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});