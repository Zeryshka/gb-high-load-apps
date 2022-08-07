// Init
const array = (new Array(10_000_000)).fill(1).map((a, i) => i);
const set = new Set(array);

// Добавление элементов в массив
console.time('addArray');
array.push(1_000_001);
console.timeEnd('addArray');

// Добавление элементов в множество
console.time('addSet');
set.add(1_000_001);
console.timeEnd('addSet');

// Удаление элементов из массива
console.time('deleteArray');
array.pop();
console.timeEnd('deleteArray');

// Удаление элементов из множества
console.time('deleteSet');
set.delete(1);
console.timeEnd('deleteSet');

// Поиск элемента в массиве через find
console.time('findArrayFind');
array.find(a => a === 900_000);
console.timeEnd('findArrayFind');

// Поиск элемента в множестве через has
console.time('findSetHas');
set.has(900_000);
console.timeEnd('findSetHas');

// Поиск элемента в массиве через indexOf
console.time('findArrayIndexOf');
array.indexOf(900_000);
console.timeEnd('findArrayIndexOf');
