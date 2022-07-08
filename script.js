const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");


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
    
