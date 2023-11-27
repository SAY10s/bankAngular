// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  balance: number = 0;
  incomeList: { amount: number; title: string }[] = [];
  expensesList: { amount: number; title: string }[] = [];
  transactionAmount: number = 0;
  transactionTitle: string = '';

  addTransaction(amount: number, title: string): void {
    if (amount >= 0) {
      this.balance += amount;
      this.incomeList.push({ amount, title });
    } else {
      this.balance += amount;
      this.expensesList.push({ amount: Math.abs(amount), title });
    }
  }
}
