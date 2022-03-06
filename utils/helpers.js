const { format, formatDistance, formatRelative, subDays } = require('date-fns')


module.exports = {
  format_date: (date) => {
    return `${formatRelative(new Date(date), new Date())}`;
  },
}

