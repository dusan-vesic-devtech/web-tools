const dns = require('dns');

function getServers() {
  return new Promise((res, rej) => {
    res(dns.getServers());
  })
}

function getA(url) {
  return new Promise((res, rej) => {
    dns.resolve4(url, (err, addresses) => {
      if (err) res({ err });
      res(addresses);
    })
  })
}

function getAAAA(url) {
  return new Promise((res, rej) => {
    dns.resolve6(url, (err, addresses) => {
      if (err) res({ err });
      res(addresses);
    })
  })
}

function getCName(url) {
  return new Promise((res, rej) => {
    dns.resolveCname(url, (err, addresses) => {
      if (err) res({ err });
      res(addresses);
    })
  })
}

function getNs(url) {
  return new Promise((res, rej) => {
    dns.resolveNs(url, (err, addresses) => {
      if (err) res({ err });
      res(addresses);
    })
  })
}

exports.getA = getA
exports.getAAAA = getAAAA
exports.getServers = getServers
exports.getCName = getCName
exports.getNs = getNs
