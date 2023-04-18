const { startsWith, split, filter, map, pipe, zipObj, nth, sum, toPairs, join } = require('ramda')

const stockList = (stock, categories) => {
  const filterStockByCategory = (category) => filter(startsWith(category), stock)

  return pipe(
    map(filterStockByCategory),
    zipObj(categories),
    map(pipe(
      map(split(' ')),
      map(nth(1)),
      map(parseInt),
      sum
    )),
    toPairs,
    map(([category, count]) => `(${category} : ${count})`),
    join(' - ')
  )(categories)
}

module.exports = stockList
