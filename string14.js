/*
14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor
Test Data :
console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises." 
"JavaScript We are doing some exercises." 
"We are doing some JavaScript exercises."
 */

const insert=(str,sub,pos)=>{
  
   let ar=str.split('')
   ar.splice(pos,0,sub)
  return v=ar.join('')
 
  
}

console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18));