// Local stubbed version of the API

/* eslint-disable no-console,import/no-extraneous-dependencies */
require('@babel/register')({
  rootMode: 'upward',
  ignore: [/node_modules/],
})

const { server } = require('./index')

server.listen(4000, () => {
  console.log('Drone Query Service listening on http://localhost:4000')
})