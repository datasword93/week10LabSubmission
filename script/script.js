function calc() {
  var nums = [];
  var sum = 0;
  var i;

  // require the 3 separate numbers from user
  for (i = 0; i < 3; i++) {
    nums[i] = parseInt(prompt("Enter number " + (i + 1)));
  }

  // Arrive at a Sum
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
// Average the sum to total unique entry to get the Mean
  var mean = sum / nums.length;
  var meanTwoDecimals = mean.toFixed(2);

  document.getElementById("result").innerHTML =
    "Numbers: " + nums.toString() + "<br>" +
    "Sum: " + sum + "<br>" +
    "Mean: " + meanTwoDecimals;
}
