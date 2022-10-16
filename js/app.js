import { inputUI } from './UI.js';
import { resultUI } from './UI.js';
import { statesNames } from './data.js';
import { stateTaxes } from './data.js';
import { calculateEarnings } from './functions.js';

let statesArr = Object.values(statesNames);

// console.log(typeof states);
// console.log(states);

statesArr.forEach((state) => {
  //console.log(state);
  let option = document.createElement('option');
  option.value = state;
  option.textContent = state;
  inputUI.state.appendChild(option);
});

const rate = 15;
const hours = 32;
const stateTax = 0.13;
const housing = 100;
const transportation = 50;

inputUI.calcBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const data = calculateEarnings(
    rate,
    hours,
    stateTax,
    housing,
    transportation
  );

  // UI.grossPay.textContent = data.grossPay;
  // UI.taxAmount.textContent = data.taxAmount;
  // UI.expenses.textContent = data.expenses;
  // UI.weeklyNetPay.textContent = data.weeklyNetPay;
  resultUI.foodResult.textContent = data.weeklyFoodCost;
  resultUI.totalResult.textContent = data.totalNetPay;

  resultUI.resultsContainer.classList.remove('hidden');

  console.log(data);
});

console.log(statesArr);
console.log(stateTaxes);
