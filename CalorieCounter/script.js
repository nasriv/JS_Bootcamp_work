// Calorie Counter program

function inputCaloriesByDay (day) {
  // returns calories eaten on single day
  if ('Monday') {
    return 3500;
  } else if ('Tuesday') {
    return 1500;
  } else if ('Wednesday') {
    return 1800;
  } else if ('Thursday') {
    return 2300;
  } else if ('Friday') {
    return 2400;
  } else if ('Saturday') {
    return 1500;
  } else if ('Sunday') {
    return 1500;
  } else {
    return 'Please choose valid day';
  }
}

function getTotalCalories () {
  // sums up all calories for the week
  return inputCaloriesByDay('Monday') +
  inputCaloriesByDay('Tuesday') +
  inputCaloriesByDay('Wednesday') +
  inputCaloriesByDay('Thursday') +
  inputCaloriesByDay('Friday') +
  inputCaloriesByDay('Saturday') +
  inputCaloriesByDay('Sunday');
}

function getIdealCalories () {
  // defines ideal number of calories to be eaten per week
  var idealDailyCalories = 1800;
  return idealDailyCalories * 7;
}

function calculateHealthPlan () {
  // determine if calories already eaten exceed ideal for day
  var actualCalories = getTotalCalories();
  var idealCalories = getIdealCalories();
  if (actualCalories === idealCalories) {
    return 'You ate just the right amount!';
  }
  if (actualCalories > idealCalories) {
    return 'Time to head to the gym!';
  } else {
    return 'Time for seconds!';
  }
}

console.log(calculateHealthPlan());
