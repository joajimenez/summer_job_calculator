// import Chart from 'chart.js';

export function calculateEarnings(rate, hours, stateTaxRate, monthlyFood) {
  const totalWeeks = 17;
  const summerLength = 4.25; // months
  const monthlyFoodCost = monthlyFood * summerLength;
  const federalTaxRate = 10;

  const grossIncome = hours * rate * totalWeeks;

  // Calculate the federal taxes.
  const federalTax = grossIncome * (federalTaxRate / 100);

  // Calculate the state taxes.
  const stateTax = grossIncome * (stateTaxRate / 100);

  // Calculate the total tax amount.
  const totalTaxAmount = federalTax + stateTax;

  // Calculate the weekly net pay.
  const weeklyNetPay =
    (grossIncome - totalTaxAmount - monthlyFood) / totalWeeks;

  // Calculate after tax income.
  const afterTaxIncome =
    grossIncome - (federalTax + stateTax + monthlyFoodCost);

  const data = {
    grossPay: grossIncome,
    federalTaxAmount: federalTax,
    stateTaxRate: stateTaxRate,
    stateTaxAmount: stateTax,
    federalTaxRate: federalTax,
    totalTaxAmount: totalTaxAmount,
    foodCost: monthlyFoodCost,
    weeks: totalWeeks,
    weeklyNetPay: weeklyNetPay,
    afterTaxIncome: afterTaxIncome,
  };

  return data;
}

export function generateDonutChart(afterTax, totalTax) {
  const data = {
    labels: ['After Tax Income', 'Total Income Tax'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [afterTax, totalTax],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
    title: 'After-Tax Income vs. Total Income Tax',
    legend: {
      display: false,
    },
    options: {
      // Change the size of the chart.
      width: 400,
      height: 300,
      // Change the font size.
      fontSize: 16,
      // Change the colors used.
      colors: ['#FF6384', '#36A2EB'],
    },
  };

  const myChart = new Chart(document.getElementById('myChart'), config);
}
