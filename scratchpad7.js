
/* 7. Write a JavaScript program to find the most frequent item of an array. 
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */
const max=(arr)=>{
  let k=0,item,maxm=1;
for(let i=0;i<arr.length;i++)
  {
     k=0;
    for(let j=0;j<arr.length;j++){
      
        if(arr[i]==arr[j])
          {
             k++;
          }
          
  }
    if (k>maxm)
    {
   maxm=k;
      item=arr[i];
    }
   
}
  console.log(item, maxm )
}
max([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])


