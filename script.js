var state = {
    balance: 200,
    income: 1500,
    expense: 500,
    transactions: [
        {name: 'Salary', amount: 5000, type: 'income'},
        {name: 'Transport', amount: 500, type: 'expense'},
        {name: 'Buy Grocery', amount: 230, type: 'expense'},
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionsEl = document.querySelector('#transaction');

function init() {
    updateState();
    render();
}

function updateState() {
    var balance = 0,
        income = 0,
        expense = 0;
        item;
    
        for (var i = 0; i < state.transactions.length; i++) {
            item = state.transactions[i];

            if (item.type === 'income') {
                income += item.amount;
            } else if (item.type === 'expense') {
                expense += item.amount;
            }
        }

        balance = income - expense;
    
        state.balance = balance;
        state.income = income;
        state.expense = expense;

}

function render() {
    balanceEl.innerHTML = `R${state.balance}`;
    incomeEl.innerHTML = `R${state.income}`;
    expenseEl.innerHTML = `R${state.expense}`;

    var transactionEl, containerEl, amountEl, item, btnEl;

    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionEl = document.createElement('li');
        transactionEl.append(item.name);

        transactionsEl.appendChild(transactionEl);

        containerEl = document.createElement('div');
        amountEl = document.createElement('span');
        if (item.type === 'income') {
            amountEl.classlist.add('income-amt');
        } else if (item.type === 'expense') {
            amountEl.classlist.add('expense-amt');
        }
           
    }
    amountEl.innerHTML = `R${item.amount}`;
    
    containerEl.appendChild(amountEl);

    transactionsEl.appendChild()
}

init();
