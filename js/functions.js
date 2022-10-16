import { states } from './data.js';
import { federalTaxes } from './data.js';
//import { UI } from './UI.js';

export function calculateEarnings(
  rate,
  hours,
  stateTax,
  housing,
  transportation
) {
  const federalIncomeTax = federalTaxes;
  const stateIncomeTax = states.AK.stateTax;
  const weeklyFoodCost = 79.08;
  const totalWeeks = 17;

  const grossPay = hours * rate;
  const taxAmount = grossPay * stateTax + grossPay * federalIncomeTax;
  const expenses = housing + weeklyFoodCost + transportation;
  const weeklyNetPay = grossPay - taxAmount - expenses;
  const totalNetPay = (grossPay - (taxAmount + expenses)) * totalWeeks;

  const data = {
    grossPay: grossPay,
    stateIncomeTax: stateIncomeTax,
    federalIncomeTax: federalIncomeTax,
    totalTaxAmount: taxAmount,
    food: weeklyFoodCost,
    weeks: totalWeeks,
    expenses: expenses,
    weeklyNetPay: weeklyNetPay,
    totalNetPay: totalNetPay,
  };

  return data;
}
