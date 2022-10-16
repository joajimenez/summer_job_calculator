export const inputUI = {
  formContainer: document.querySelector('.form_container'),
  form: document.querySelector('.form'),
  hours: document.querySelector('#hours'),
  rate: document.querySelector('#rate'),
  state: document.querySelector('#state'),
  housing: document.querySelector('#housing'),
  transportation: document.querySelector('#transport'),
  calcBtn: document.querySelector('.calc_btn'),
};

export const resultUI = {
  resultsContainer: document.querySelector('.results_container'),
  regHours: document.querySelector('.reg_hours_span'),
  overTimeHours: document.querySelector('.overtime_hours_span'),
  stateTaxes: document.querySelector('.state_taxes_span'),
  federalTaxes: document.querySelector('.federal_taxes_span'),
  food: document.querySelector('.food_span'),
  housing: document.querySelector('.housing_span'),
  transportation: document.querySelector('.transportation_span'),
  others: document.querySelector('.others_span'),

  grossIncome: document.querySelector('.gross_income_span'),
  grossExpenses: document.querySelector('.gross_expenses_span'),

  netIncome: document.querySelector('.net_income_span'),
};
