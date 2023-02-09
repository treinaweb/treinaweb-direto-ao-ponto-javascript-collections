var set = new Set();
set.add(2);
set.add(1);
set.add(1);
for (let item of set) {
    console.log(item, 'daw');
}
set.delete(1);
console.log(set.size);
console.log(set.has(1));
set.delete(1);
console.log(set.has(1));
console.log(set);
