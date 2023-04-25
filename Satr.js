const average = (array) => {
  let numberOfElements = array.length;
  let total = 0;

  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  let result = total / numberOfElements;
  return result;
};

array = [2, 4, 5, 5, 7, 0];

console.log(average(array));

// ---------------------------------

const Item = (arr,item,item2) => {
 arr.push(item,item2);
 arr.shift();
 arr.shift();
 return arr 
};

console.log(Item(array,2,5));

// -------------------------------

for(let i = 1;i > 5;i++){
 
}