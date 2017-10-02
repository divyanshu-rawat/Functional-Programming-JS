const obj = {
  val: 2
};

const pureFunc1 = x => Object.assign({}, x, { val: x.val + 1});

const pureFunc2 = x => Object.assign({}, x, { val: x.val * 2});

console.log(pureFunc1(pureFunc2(obj)).val); // 5
