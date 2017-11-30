var a=('11 17 12 14 12 7 17 3 8 1 9 13 16 19 1 7 17 7 8 11 0 19 14 18 3 14 4 17 2 8 15 13 17 0 8 10 19').split(' ');
var b=('17 13 7 10 14 0 19 13 1 6 2 1 7 13 1 6 19 19 1 5 16 11 8 4 6 1 2 18 1 12 18 19 17 17 9').split(' ');
var benchmark=4;

var acounter=0;
var asum=0;

for(let i=0;i<a.length;i++)
{
  var sum;
  sum=asum+(a[i]-0);
    if(sum<benchmark)
    {
        asum=asum+(a[i]-0);
        acounter++;
        
    }
    else
    {

         break;
    }
}
var bcounter=0;
var bsum=0;
for(let i=0;i<b.length;i++)
{
    var sum;
    sum=bsum+(b[i]-0);
    if(sum<benchmark)
    {
        bsum=bsum+(b[i]-0);
        bcounter++;
        
    }
    else
    {
     
         break;
    }
}
var maxSteps=bcounter+acounter;
var minSteps=bcounter>=acounter?bcounter:acounter;

if(minSteps!=1){
    while(maxSteps>=minSteps)
    {
  
        if(asum+bsum<=benchmark)
        {
        
        break;
        }
        else 
        {
            if(bcounter<=acounter)
            {      
                bsum=bsum-(b[bcounter-1]-0);
                bcounter--;
                maxSteps--
            }
            else{
                asum=asum-(a[acounter-1]-0);
                acounter--;
                maxSteps--

            }
            if(bsum+asum<=benchmark)
            {
            
                break;
            
            }
        
        }
    }
}else maxSteps=minSteps;




if(a[0]==benchmark && b[0]>=benchmark)
console.log(1)
else if (b[0]==benchmark && a[0]>=benchmark)
console.log(1)
else 
console.log(maxSteps);




