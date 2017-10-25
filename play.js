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
// function mergeSortedArray1(a, b){
//     var merged = [], 
//         aElm = a[0],
//         bElm = b[0],
//         i = 1,
//         j = 1;
    
//     if(a.length ==0)
//       return b;
//     if(b.length ==0)
//       return a;
  
//     while(aElm || bElm){
//      if((aElm && !bElm) || aElm < bElm){
//        merged.push(aElm);
//        aElm = a[i++];
//      }   
//      else {
//        merged.push(bElm);
//        bElm = b[j++];
//      }
//     }
//     return merged;
//   }
// /*
// 33,683
// ±2.94%
// 27% slower
// */
//   function mergeSortedArray2(a, b){
    
//     return [...a,...b].sort((a,b)=>a-b);
//   }
// /*
// 45,569
// ±1.83%
// 0.11% slower
// */
//   function mergeSortedArray3(a, b){
    
//    return a.concat(b).sort((a,b)=>a-b);
//   }

  
//   console.log(mergeSortedArray1([2,5,6,9], [1,2,3,4,6,7,29]));
//   console.log(mergeSortedArray2([2,5,6,9], [1,2,3,4,6,7,29]));
//   console.log(mergeSortedArray3([2,5,6,9], [1,2,3,4,6,7,29]));

/**
 * swap number without temp
 */
// function swap(a,b)
// {
//     console.log('before swap: ','a: ', a, 'b: ', b);
//     b=a+b;
//     a=b-a;
//     b=b-a;
//     console.log('after swap: ','a: ', a, 'b: ', b);  
// }

// swap(123123123,312231);

/**
 * remove duplicate char
 */

// function removeDuplicateChar1(str){
//     var len = str.length,
//         char, 
//         charCount = {}, 
//         newStr = [];
//     for(var i =0; i<len; i++){
//       char = str[i];
//       if(charCount[char]){
//         charCount[char]++;
//       }
//       else
//         charCount[char] = 1;
//     }
//     for (var j in charCount){
//       if (charCount[j]==1)
//          newStr.push(j);
//     }
//     return newStr.join('');
//   }
//   function removeDuplicateChar2(str){
//     var len = str.length,
//         newStr = [];
//     for(var i=0;i<len;i++)
//     {
//         if(str.indexOf(str[i])==str.lastIndexOf(str[i]))
//         newStr.push(str[i]);
//     }
//     return newStr.join('');
//   }
  
//  console.log( removeDuplicateChar1('Learn more javascript dude'));
//  console.log( removeDuplicateChar2('Learn more javascript dude') );



 /**
 * Given an array of integers, output a list of four integers 
 * that sum to zero (the same input integer can be used multiple times), 
 * or indicate that no such set of four integers exists. For example, given the array (2 3 1 0 -4 -1), 
 * the set of four integers (3 1 0 -4) sums to zero, as does the set (0 0 0 0).
 */
function sum4(a){
 var aBool=false;
 a=a.concat(a).concat(a);
 
 for(var i=0;i<a.length;i++)
 {
     var a1=a[i]
     for(var k=i+1;k<a.length-k;k++)
     {
        var a2=a[k]
        for(var j=k+1;j<a.length-j;j++)
        {
            var a3=a[j]
            for(var m=j+1;m<a.length-m;m++)
            {
                var a4=a[m];
                if(a1+a2+a3+a4==0) 
                {
                console.log('array is :'+a1+' '+a2+' '+a3+' '+a4+' ');
                aBool=true;
                }
            }
        } 
     }
 }
  if(!aBool)console.log('no sets');
}

a=[1,2,3,4,5,6,7,8,9,0,1,-2,-3,-4,-5,-6,-7,-8,-9];
sum4(a);