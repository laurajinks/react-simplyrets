const usPriceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const priceFormatter = (price) => {
  return usPriceFormatter.format(price)
}

export {priceFormatter}