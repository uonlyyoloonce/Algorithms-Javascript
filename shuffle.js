/**
 *  for 'n' positions
 *  probability of any given item appreing at any given index => 1/n
 *
 */
const arr = [1, 2, 3, 4, 5, 6];
const shuffleArray=(arr)=>{
    const narr = [...arr];
    for(let i=0;i<arr.length;i++)
    {
        var rint=randomInt(0,narr.length-1);
        arr[i]=narr[rint];
        narr.splice(rint,1);
    }    
   console.log(arr);
}
const randomInt=(min,max)=>{

    return Math.floor(Math.random()*(max-min+1))+min;

}

for(let i=0;i<=1000;i++)
{
shuffleArray(arr);
}