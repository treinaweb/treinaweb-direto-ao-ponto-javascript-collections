const map = new Map();

let obj = {};

const weakMap = new WeakMap();

weakMap.set(obj, "valor");

// map.set(obj, "valor");

// console.log(map.get(obj));

obj = null;

console.log(weakMap.get(obj));