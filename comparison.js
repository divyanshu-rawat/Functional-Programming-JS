
let aString = '1'
let aNumber = 1
if (aString == aNumber) {
  console.log('"1" == 1');
} else {
  console.log('"1" != 1');
}
if (aString === aNumber) {
  console.log('"1" === 1');
} else {
  console.log('"1" !== 1');
}


let aNull = null
let aUndefined = undefined
if (aNull == aUndefined) {
  console.log('null == undefined');
} else {
  console.log('null != undefined');
}
if (aNull === aUndefined) {
  console.log('null === undefined');
} else {
  console.log('null !== undefined');
}
if (aNull) {
  console.log('null = true');
} else {
  console.log('null = false');
}
if (aUndefined) {
  console.log('undefined = true');
} else {
  console.log('undefined = false');
}
