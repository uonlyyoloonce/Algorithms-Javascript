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
/*
48,286
±7.79%
fastest
*/
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
/*
33,683
±2.94%
27% slower
*/
  function mergeSortedArray2(a, b){
    
    return [...a,...b].sort((a,b)=>a-b);
  }
/*
45,569
±1.83%
0.11% slower
*/
  function mergeSortedArray3(a, b){
    
   return a.concat(b).sort((a,b)=>a-b);
  }

  function mergeSortedArray3(a, b){
       var alen=a.length,blen=b.length;
       var returnArry=[];
       if(alen===0)return b;
       if(blen===0)return a;
       if(a[alen]<b[0])return a.concat(b);
       if(b[blen]<a[0]) return b.concat(a);
       

  }

  function findLastIndex(a,b){
      var lasta=a[a.length-1];
      var Idx=b.length-1;
     var minIdx=0;
    
      while(lasta<b[Idx])
      {
        
      }

  }
  console.log(mergeSortedArray1([2,5,6,9], [1,2,3,4,6,7,29]));
  console.log(mergeSortedArray2([2,5,6,9], [1,2,3,4,6,7,29]));
  console.log(mergeSortedArray3([2,5,6,9], [1,2,3,4,6,7,29]));

