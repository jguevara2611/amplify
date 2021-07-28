const express = require('express')
const {Nuxt} = require('nuxt')
const path = require('path')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// Create App
const app = express()

// Set API Gateway Middleware
app.use(awsServerlessExpressMiddleware.eventContext())

// Provide Assets
// app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist','client')))
// app.use('/static', express.static(path.join(__dirname,'static')))

// Add Nuxt
let config = require('./nuxt.config.js')
config.dev = false
const nuxt = new Nuxt(config)
// app.use(nuxt.render)

// app.disable('x-powered-by')

app.use(async (req, res, next) => {
	await nuxt.ready()
	nuxt.render(req, res, next)
})


module.exports = app