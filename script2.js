let submit = document.querySelector('button');

function getValue(element) {
  value = document.querySelector(`${element}`).value;
  return value;
}

function calculateFinalDeposit() {
  // Declaration of variables:
  let deposit = +getValue('#deposit');
  let payment = +getValue('#payment');
  let rate = +getValue('#rate');
  let days = +getValue('#days');
  //    let deposit = document.querySelector('#deposit').value;
  //    let payment = document.querySelector('#payment').value;
  //    let rate = document.querySelector('#rate').value;
  //    let days = document.querySelector('#days').value;

  // Error checking the variables:
  //     if (deposit !== Math.abs(deposit)) { console.log("NaN :)") ; }
  //     if (payment !== Math.abs(payment)) { console.log("NaN :)"); }
  //     if (days !== Math.trunc(days)) {console.log("NaN :)") ; }
  //     if (!(days>0 && days <100)) { console.log("NaN :)"); }
  // 

  // Main calculation:
  months = days/30;
  rate = rate/100/12;

  // this will be some cycle to calculate the rate increase
  for (cycle = 0; cycle<months; cycle++) {
    deposit += (deposit * rate) + payment
  }
  result = deposit.toFixed(2);

  //    let result = payment * (((1+rate)**months - 1)/rate);
//  result = Math.round(result);
  console.log(result);
  document.querySelector('#result').innerHTML = `По указанным критериям, баланс составит: ${result}`;
}

submit.addEventListener('click', calculateFinalDeposit);
