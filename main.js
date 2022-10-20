// Write a function called checkCoupon which verifires that a coupon code is valid and not expired.
// Acoupon is  no more valid on the day After the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR"

// EXAMPLES:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") === true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015") === false


function checkCoupon(enteredCode, correctCode, currentDate, expirationdate){
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate) 
}