const map = new Map();
const meuObj = {};

map.set('nome', 'Ariel');
map.set('ano', 2023);
map.set(meuObj, 'meu objeto');
map.set(function () { }, 'minha função');

// map.delete('ano');
// console.log(map.get('nome'));

// for (const [key, valor] of map) {
//     console.log(`${key}:${valor}`);
// }
console.log(map.get(meuObj));
console.log(map);