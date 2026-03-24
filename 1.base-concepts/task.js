"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b * b - 4 * a * c;
  
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;

  if (S <= 0) {
    return 0;
  }

  let monthlyPayment = S * (P + (P / ((1 + P) ** countMonths - 1)));
  let total = monthlyPayment * countMonths;

  return Math.round(total * 100) / 100;
}