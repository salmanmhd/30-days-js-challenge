## data types

1. Primitive - number, string, boolean, undefined, null, symbol, bigInt

2. Non primitive - **objects, arrays, functions**, date, map,set, wekamap, etc.

## Memory management in Js:

**stack memory (primitve)** - it gives us copy

**heap (non primitve)** - It gives us reference

**deep copy**: which do not share the same references

**shallow copy**: which shares the reference, if it is copied and later on the copied variable changes the value then originl value will also be changed.

**Heap memory, non primitive data types**

## Arrays:

_'/n' - This will add new line_

### Important array methods:

- push(1) - **it will add the element at the last**. We can give multiple arguments
- pop() - **it will delete the last element**. No argument needs to be passed.
- unshift(x) - **It will add the argument at the begining**.Although it is advised to not use this method much because it is not that efficient becase to add any element in the first it will need to shift all the elements to next position.
- shift() - **to remove the first element in array**. No arguement needed to pass, expensive operation!
- includes(1) - **It will check if the passed arguments is available in the array or not, results in boolean**. it takes two argument (value, start Index). Start Index is optional, specifying the startIdex will allow the search from that index.
- join(separator) - **it converts the array in new single string**. The argument is optional, argument will be added after every element in the array.
- slice(start, end(exluded) ) - **it is used to take some part of array**.
  - both the arguments are optional, end index is exluded.
  - if only one arguments are there then it means that it is start.
  - if there is no any argument. i.e., `const arr1 = arr.slice();` then it will create a copy of that array, no value can be changed with other variable in this case
  - negate arguments can be used here as well, -1 = last element, -3 = third last element
  - it will not impact on the original array while the splice will remove the spliced elements from array
