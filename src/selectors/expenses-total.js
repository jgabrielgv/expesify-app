export default(expenses) => {
   return expenses.reduce((total, currentExpense) => total + currentExpense.amount, 0);
};

// expenses.map((expense) => expense.amount).reduce((total, currentValue) => total + amount, 0);