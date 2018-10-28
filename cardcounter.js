var count = 0
function cc(card) {
  //first values to return a positive to the count
  switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  //first values to return negative to the count
  case 10:
  case "J":
  case "Q":
  case "K":
    return count--;
    break;
  }
  //conditions for count and return order to bet or hold
if (count > 0){
  return count + " Bet";
} else {
  return count + " Hold";
  }
}

cc(8);
