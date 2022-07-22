var state = {
    balance: 500,
    income: 0,
    expense: 0,
    transactions: [
        {type: 'income', detail: 'Salary', amount: 5000},
        {type: 'expense', detail: 'Buy', amount: 50},
        {type: 'expense', detail: 'Transport', amount: 500},
    ],
}

var balanceEl = document.querySelector('balance');
var incomeEl = document.querySelector('income');
var expenseEl = document.querySelector('expense');
var transactionsEl = document.querySelector('transaction');

// link JAVASCRIPT to HTML
function display() {
    balanceEl.innerHTML = `R${state.balance}`;
    incomeEl.innerHTML = `R${state.income}`;
    expenseEl.innerHTML = `R${state.expense}`;

    var transaction = document.getElementById(transaction);

    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionsEl = document
    }

}


// // display everything
// function display() {
//     console.log('display everthing')

display()
