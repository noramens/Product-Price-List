export const getFormattedDate = date => date.slice(0, 10);

export function getNewDate() {
  const date = new Date();
  const thisYear = date.getUTCFullYear();
  const thisMonth = date.getUTCMonth();
  const thisDay = date.getDate();
  return `${thisYear}-${thisMonth + 1}-${thisDay}`;
}

export function getLatestDate(prices) {
  //all dates
  const allDates = [];
  prices && prices.forEach(item => allDates.push(item.date));

  //highest date
  const maxDate = allDates.reduce((a, b) => (a > b ? a : b), 0);

  //filter to get maxDate
  const latestPrice = prices && prices.filter(item => item.date === maxDate);

  return latestPrice && latestPrice[0] && latestPrice[0].price;
}
