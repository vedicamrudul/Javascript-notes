// rest operator.
// In shopping carts and all, you dont know how many items a user will put into the cart.
// So while passing the argument into a function that lets say, calculates the total price of the things in cart,
// We use rest operator. (...num1) => this basically says "there will be multiple inputs, bundle them up
// and give it to me in the form of an array named num1."

function rest_test(...num1) {
  return num1;
}

console.log(rest_test(200, 300, 400));

// now lets add these values.
// this is extra from my side.

function AddValues(...num1) {
  sum = 0;
  num1.forEach((element) => {
    sum = sum + element;
  });
  return sum;
}

console.log(AddValues(100, 200, 300));
// slay kardiya bhai

//now other case.
// if we define a function as function xyz(val1, val2, ...num1) then the first two arguments
// the user enters will get stored in val1 and val2 and the rest (no matter how many)
// will get stored into the array named num1.

function multiple_values(User, phone_no, ...array_of_items) {
  sum = 0;
  array_of_items.forEach((item) => {
    sum = sum + item;
  });
  result = `Dear ${User}, Your bill total is ${sum}. \nPlease confirm your phone number: ${phone_no}`;
  return result;
}

console.log(multiple_values('Vedica Mrudul', 8828250125, 300,200,50,70))