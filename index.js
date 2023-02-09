const weakSet = new WeakSet();

var obj = {};

weakSet.add(obj);

// console.log(weakSet.has(obj));

obj = null;


console.log(weakSet.has(obj));