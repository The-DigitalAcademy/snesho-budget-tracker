var state = {
    balance: 0,
    income: 0,
    expense: 0,
    transactions: [
        { name:'Salary',amount: 0, type: 'income' },
        { name:'Transport',amount: 0, type: 'expense' },
        { name:'insurance',amount: 0, type: 'expense' },
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionsEl = document.querySelector('#transaction');

function init() {
    balanceEl.innerHTML = `R${state.balance}`;
    incomeEl.innerHTML = `R${state.income}`;
    expenseEl.innerHTML = `R${state.expense}`;

    var transactionsEl;

    for (var i = 0; i < state.transactions.length; i++) {
        
    }
}


init();
    
