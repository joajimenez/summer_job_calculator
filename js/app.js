import { calculateEarnings } from './utils.js';

// Number formatter

const nf = new Intl.NumberFormat('en-US');

const selectElement = document.getElementById('state');

// This function will fetch the JSON data from both files and return it as a JavaScript object
const urls = ['./data/taxes.json', './data/groceries_monthly_cost.json'];

const getData = async () => {
  const [taxes, groceries] = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    })
  );

  return { taxes, groceries };
};

const data = await getData();

let statesData = data.taxes;
let groceriesData = data.groceries;

// console.log(groceriesData);

// Loop through the states in the JSON file and add an option element for each one.

for (let key in statesData) {
  const optionElement = document.createElement('option');
  optionElement.value = key;
  optionElement.textContent = key;
  selectElement.appendChild(optionElement);
}

const inputUI = {
  rate: document.getElementById('rate'),
  hours: document.getElementById('hours'),
  state: document.getElementById('state'),
  calcBtn: document.getElementById('calcBtn'),
};

const resultUI = {
  resultsContainer: document.querySelector('.results-container'),
  detailsContainer: document.querySelector('.details-container'),
  fedTaxAmount: document.getElementById('fed-tax-amount'),
  stateTaxRate: document.getElementById('state-tax-rate'),
  stateTaxAmount: document.getElementById('state-tax-amount'),
  totalTaxAmount: document.getElementById('total-income-tax'),
  grossIncome: document.getElementById('gross-income-amount'),
  foodResult: document.getElementById('monthly-food-cost'),
  afterTaxIncome: document.getElementById('after-tax-income'),
};

inputUI.calcBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const rate = inputUI.rate.value;
  const hours = inputUI.hours.value;
  const stateTaxRate = statesData[inputUI.state.value];
  const groceries = groceriesData[inputUI.state.value];

  const data = calculateEarnings(rate, hours, stateTaxRate, groceries);

  resultUI.fedTaxAmount.textContent = parseFloat(data.federalTaxAmount).toFixed(
    2
  );
  resultUI.stateTaxRate.textContent = data.stateTaxRate;
  resultUI.stateTaxAmount.textContent = parseFloat(data.stateTaxAmount).toFixed(
    2
  );

  resultUI.grossIncome.textContent = nf.format(
    parseFloat(data.grossPay).toFixed(2)
  );
  resultUI.totalTaxAmount.textContent = parseFloat(data.totalTaxAmount).toFixed(
    2
  );

  resultUI.foodResult.textContent = parseFloat(data.foodCost).toFixed(2);

  resultUI.afterTaxIncome.textContent = nf.format(
    parseFloat(data.afterTaxIncome).toFixed(2)
  );
  resultUI.resultsContainer.classList.remove('hidden');
});
