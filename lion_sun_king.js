//Create variables to manipulate in the personal finance coaching program
let budget = 0;
let expenses = 0;
let savings = 0;
let income = 0;
let netWorth = 0;
let monthlyExpenses = 0;
let monthlySavings = 0;
let monthlyIncome = 0;
let annualExpenses = 0;
let annualSavings = 0;
let annualIncome = 0;

//Define a function to manage budget, saving, and expenses
const manageMoney = (budget, expenses, savings, income) => {
  netWorth = budget + savings + income - expenses;
  console.log(`Your net worth is ${netWorth}.`);

  //If net worth is greater than or equal to zero, then user is in good financial standing
  if (netWorth >= 0) {
  	console.log('You are in good financial standing.');
  }
  //If net worth is less than zero, then user is in bad financial standing
  else {
  	console.log('You are in bad financial standing.');
  }
};

//Calculate monthly costs
const monthlyCosts = (expenses) => {
  monthlyExpenses = expenses;
  monthlySavings = 0.1 * expenses;
  monthlyIncome = 0.2 * expenses;
  console.log(`Your monthly expenses are ${monthlyExpenses}, monthly savings are ${monthlySavings}, and your monthly income is ${monthlyIncome}.`);
};

//Calculate annual costs
const annualCosts = (expenses) => {
  annualExpenses = expenses * 12;
  annualSavings = 0.1 * expenses * 12;
  annualIncome = 0.2 * expenses * 12;
  console.log(`Your annual expenses are ${annualExpenses}, annual savings are ${annualSavings}, and your annual income is ${annualIncome}.`);
};

//Provide guidance on budgeting and goal setting
const goalSetting = (budget, expenses, savings) => {
  let goalBudget = budget - expenses + savings;
  console.log(`You should set a goal budget of ${goalBudget}.`);

  //If goal budget is greater than or equal to zero, then user is on track
  if (goalBudget >= 0) {
  	console.log('You are on track for your goals.');
  }
  //If goal budget is less than zero, then user is not on track
  else {
  	console.log('You are not on track for your goals.');
  }
};

//Provide guidance on investments
const investmentRisk = (budget, expenses, savings, income) => {
  let riskBudget = budget + income - expenses - savings;

  //If risk budget is greater than or equal to zero, then user can take on more risk
  if (riskBudget >= 0) {
  	console.log('If you have financial stability, you can take on more risk and potentially have more reward.');
  }

  //If risk budget is less than zero, then user must take on less risk
  else {
  	console.log('If you do not have financial stability, you must take on less risk to build your wealth.');
  }
};

//Call functions
manageMoney(budget, expenses, savings, income);
monthlyCosts(expenses);
annualCosts(expenses);
goalSetting(budget, expenses, savings);
investmentRisk(budget, expenses, savings, income);