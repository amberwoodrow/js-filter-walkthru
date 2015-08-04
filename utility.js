// Utility functions
function getRanges(num) {
  switch (num) {
    case 10:
    return [0,10];
    case 20:
    return [11,20];
    case 30:
    return [21,30];
    case 40:
    return [31,40];
  }
}

function getValues (rangeArr, domArr) {
  var newArr = [];
  for(var i=0; i<domArr.length; i++) {
    if (domArr[i] >= rangeArr[0] && domArr[i] <= rangeArr[1]) {
      newArr.push(domArr[i]);
    }
  }
  // console.log(newArr);
  return newArr;
}

