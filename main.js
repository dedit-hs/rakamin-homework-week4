// Function untuk membuat array n(qty) index dengan angka 1-n(numbers) random
function createRandomArray(numbers, qty) {
  let randomArray = [];
  for (let i = 0; i < qty; i++) {
    let randNum = Math.floor(Math.random()*numbers)+1;
    randomArray.push(randNum);
  }
  return randomArray;
}

// Function untuk membagi array menjadi dua bagian berdasarkan index ganjil dan genap
function splitArray(array) {
  //let newArray = [...array]; // Menyimpan data array
  let arrayGanjil = []; // Variabel untuk menampung array dengan index ganjil
  let arrayGenap = []; // Variabel untuk menampung array dengan index genap

  for (let i = 0; i < array.length; i++) {
    if (i%2 === 0) {
      arrayGenap.push(array[i]); // Menambahkan angka dengan index genap ke variabel arrayGenap
    } else {
      arrayGanjil.push(array[i]); // Menambahkan angka dengan index ganjil ke variabel arrayGanjil
    }
  }
  return [arrayGanjil, arrayGenap];
}

// Function untuk menghitung total
function calcTotal(array) {
  //let newArray = [...array];
  let total = 0;
  let average = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  average = total / array.length;

  return total;
}

// Function untuk menghitung rata-rata
function calcAverage(array) {
  //let newArray = [...array];
  let total = 0;
  let average = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  average = total / array.length;

  return average;
}

// Function untuk mendapatkan angka paling kecil
function getMin(array) {
  //let newArray = [...array];
  let min;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
        min = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
}

// Function untuk mendapatkan angka paling besar
function getMax(array) {
  //let newArray = [...array];
  let max;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
        max = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}

let randomArray = createRandomArray(50, 100);  // Variabel untuk menyimpan array angka random 1-50 dengan jumlah 100 index
let splitted = splitArray(randomArray); // Variabel untuk menyimpan array yang telah dibagi menjadi dua bagian array berdasarkan index
let arrayIndexGanjil = splitted[0]; // Variabel untuk menyimpan array berdasarkan index ganjil
let arrayIndexGenap = splitted[1]; // Variabel untuk menyimpan array berdasarkan index genap

let totalIndexGanjil = calcTotal(arrayIndexGanjil); // Menghitung total pada array yang berindex ganjil
let averageIndexGanjil = calcAverage(arrayIndexGanjil); // Menghitung rata-rata pada array yang berindex ganjil
let minIndexGanjil = getMin(arrayIndexGanjil); // Mencari nilai min pada array yang berindex ganjil
let maxIndexGanjil = getMax(arrayIndexGanjil); // Mencari nilai max pada array yang berindex genjil

let totalIndexGenap = calcTotal(arrayIndexGenap); // Menghitung total pada array yang berindex genap
let averageIndexGenap = calcAverage(arrayIndexGenap); // Menghitung rata-rata pada array yang berindex genap
let minIndexGenap = getMin(arrayIndexGenap); // Mencari nilai min pada array yang berindex genap
let maxIndexGenap = getMax(arrayIndexGenap); // Mencari nilai max pada array yang berindex genap

console.log(`randomArray: ${randomArray}`);
console.log(`Panjang randomArray: ${randomArray.length}`);
console.log();
console.log(`arrayIndexGanjil: ${arrayIndexGanjil}`);
console.log(`Panjang randomArrayGanjil: ${arrayIndexGanjil.length}`);
console.log();
console.log();
console.log(`arrayIndexGenap: ${arrayIndexGenap}`);
console.log(`Panjang randomArrayGenap: ${arrayIndexGenap.length}`);
console.log();
console.log(`totalIndexGanjil: ${totalIndexGanjil}`);
console.log(`averageIndexGanjil: ${averageIndexGanjil}`);
console.log(`minIndexGanjil: ${minIndexGanjil}`);
console.log(`maxIndexGanjil: ${maxIndexGanjil}`);
console.log();
console.log(`totalIndexGenap: ${totalIndexGenap}`);
console.log(`averageIndexGenap: ${averageIndexGenap}`);
console.log(`minIndexGenap: ${minIndexGenap}`);
console.log(`maxIndexGenap: ${maxIndexGenap}`);
console.log();

if (totalIndexGanjil < totalIndexGenap) {
  console.log("Total Index Genap lebih besar dari Total Index Ganjil");
}
if (totalIndexGanjil > totalIndexGenap) {
  console.log("Total Index Ganjil lebih besar dari Total Index Genap");
}
if (totalIndexGanjil === totalIndexGenap) {
  console.log("Total Index Ganjil sama besar dengan Total Index Genap");
}

if (averageIndexGanjil < averageIndexGenap) {
  console.log("Average Index Genap lebih besar dari Average Index Ganjil");
} else if (averageIndexGanjil > averageIndexGenap) {
  console.log("Average Index Ganjil lebih besar dari Average Index Genap");
} else {
  console.log("Average Index Ganjil sama besar dengan Average Index Genap");
}

if (minIndexGanjil < minIndexGenap) {
  console.log("Min Index Ganjil lebih kecil dari Min Index Genap");
}
if (minIndexGanjil > minIndexGenap) {
  console.log("Min Index Genap lebih kecil dari Min Index Ganjil");
}
if (minIndexGanjil === minIndexGenap) {
  console.log("Min Index Ganjil sama besar dengan Min Index Genap");
}

if (maxIndexGanjil < maxIndexGenap) {
  console.log("Max Index Genap lebih besar dari Max Index Ganjil");
} else if (maxIndexGanjil > maxIndexGenap) {
  console.log("Max Index Ganjil lebih besar dari Max Index Genap");
} else {
  console.log("Max Index Ganjil sama besar dengan Max Index Genap");
}