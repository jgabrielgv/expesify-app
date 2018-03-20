import moment from 'moment'

// Timestamps
// January 1st 1970 (unix epoch)
// 33400, 10, -203

// selectors
// Get visible expenses
export default (expenses, { text = '', sortBy, startDate, endDate }) => {
    text = text ? text.toLowerCase() : text;
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
          return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
          return a.amount < b.amount ? 1 : -1;
      }
    });
};