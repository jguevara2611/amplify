'use strict';
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./server.js')

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/x-icon',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]
const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)
// const server = awsServerlessExpress.createServer(app)

module.exports.nuxt = (event, context) => awsServerlessExpress.proxy(server, event, context)
