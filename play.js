// remove duplicate members from an array

// var testArray=[1,3,3,3,1,5,6,7,8,1,2,3,4,5,6,7,7,7,8,9,8,,5,4,3,4,4,5,6,7,8,6,7,5,4,3,2,2,2,3,4,5,6,71,1,2,3,5,36,7,9,0,4,6,0,7,7,5,12,35,11,1123,433,23,76,67,45,45,65,65,56,31,2,3];
// //fastest
// function removeDuplicate1(arr){
//     var exists ={},
//         outArr = [], 
//         elm;
  
//     for(var i =0; i<arr.length; i++){
//       elm = arr[i];
//       if(!exists[elm]){
//         outArr.push(elm);
//         exists[elm] = true;
//      }
//     }
//     return outArr;
//   }
// //slowest
// function removeDuplicate2(arr){
//   return arr.sort().filter((v,i)=>v!=arr[i+1]);
// }

// function removeDuplicate3(arr){
//     var temp=arr.sort();
//     var len=temp.length,outArr=[];
//     var n=0;
//     while (n<len)
//     {
//         if(arr[n]!=arr[n+1])
//          outArr.push(arr[n]);
//          n++;
//     }
//     return outArr;
// }

//merge two sorted array

function mergeSortedArray1(a, b){
    var merged = [], 
        aElm = a[0],
        bElm = b[0],
        i = 1,
        j = 1;
    
    if(a.length ==0)
      return b;
    if(b.length ==0)
      return a;
    /* 
    if aElm or bElm exists we will insert to merged array
    (will go inside while loop)
     to insert: aElm exists and bElm doesn't exists
               or both exists and aElm < bElm
      this is the critical part of the example            
    */
    while(aElm || bElm){
     if((aElm && !bElm) || aElm < bElm){
       merged.push(aElm);
       aElm = a[i++];
     }   
     else {
       merged.push(bElm);
       bElm = b[j++];
     }
    }
    return merged;
  }

  function mergeSortedArray2(a, b){
    
    return [...a,...b].sort((a,b)=>a-b);
  }

  console.log(mergeSortedArray1([2,5,6,9], [1,2,3,29]));
  console.log(mergeSortedArray2([2,5,6,9], [1,2,3,29]));