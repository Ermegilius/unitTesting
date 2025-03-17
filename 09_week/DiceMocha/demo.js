const a=[1,2,3,3,4,5,6,6,7];
const b=new Set(a);

console.log(b)
const min=Math.min(...b);
const max = Math.max(...b);

console.log(min,max)