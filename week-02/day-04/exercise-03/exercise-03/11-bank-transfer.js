'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account
function acc_bal (accounts) {
  accounts.forEach(function(element) {
    console.log(element.client_name+" : "+element.balance); 
  });
}
acc_bal(accounts);
// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
function trans(account_number,to_account_number,balance) {
  var ac = [];
  accounts.forEach(function(element) {
    ac.push(element.account_number);
  });
  // if (account_number in ac) {
  //   console.log("dddd");
  // }


  if (ac.indexOf(account_number) != -1 && ac.indexOf(to_account_number) != -1) {
    accounts.forEach(function(element,index,array) {
      if (element.account_number === account_number) {
        array[index].balance -= balance;
      }
    });
    accounts.forEach(function(element,index,array) {
      if (element.account_number === to_account_number) {
        array[index].balance += balance;
      }
    });
  }else {
    console.log("404");
  }
}

trans(11234543,23456311,1000000);
console.log(accounts);