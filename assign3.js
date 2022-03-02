//Question 1
function max(iterable, key) {
  var maximum = iterable[0];
  for (var i in iterable) {
    var temp = key(iterable[i]);
    if (temp >= key(maximum)) {
      maximum = iterable[i];
    }
  }
  return maximum;
}

//Question 2
const reverser = x => -x;

//Question 4
function changer(object, key, value) {
  var temp = object[key];
  if (Array.isArray(prev)) {
    object[key].push(value);
  } else if (typeof prev == 'object' && prev != null) {
    object[key] = value;
  } else {
    object[key] = value;
  }
  return null;
}

//Question 5
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        resolve(truthy)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = 5
    console.log(five)
    return five
}