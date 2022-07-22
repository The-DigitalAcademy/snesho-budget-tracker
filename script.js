var state = {
    balance: 200,
    income: 1500,
    expense: 500,
    transactions: [
        {type: 'income', detail: 'Salary', amount: 5000},
        {type: 'expense', detail: 'Buy', amount: 50},
        {type: 'expense', detail: 'Transport', amount: 500} 
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionsEl = document.querySelector('#transaction');

// link JAVASCRIPT to HTML
function display() {
    balanceEl.innerHTML = `R${state.balance}`;
    incomeEl.innerHTML = `R${state.income}`;
    expenseEl.innerHTML = `R${state.expense}`;

    var transactionEl, containerEl, amountEl, item;

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

display();
