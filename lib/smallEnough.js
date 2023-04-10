const { all } = require('ramda')

const smallEnough = (a, limit) => all((n) => n <= limit, a)

module.exports = { smallEnough }
