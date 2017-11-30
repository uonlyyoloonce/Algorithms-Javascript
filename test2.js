process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

var fs=require('fs');
var bCounter=false;
input_stdin_array=fs.readFileSync('sample.txt','utf8').split("\n");
main();  
function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////


function main() {
    var Q = parseInt(readLine());

   
    for(var a0 = 0; a0 < Q; a0++){
        var N = parseInt(readLine());
       var temp=N;
       var counter=0;
       var arr=[];
      
      
       

            while(temp!=2 )
            {
                var input=temp;
                
                
                temp=findGreatestDivisor(input);
            
                if(temp==input)
                {
                  counter=counter+arr.length;
                   
                    temp--;
                    counter++;
                    input=temp;
                    
                    arr=[];
                    temp=findGreatestDivisor(input);
                }
                else 
                {
                    if(temp!=2) arr.push(temp);
                    
                }
            
            
            }
        var len=arr.length;
        if(Math.pow(2,len+2)==N)
        {

         if((len+2)%2==0)  
          console.log(len+2);
         else console.log(len+3);
        }
        
     else   console.log(counter+3);
    }
  
    
}


function findGreatestDivisor (n)
{
    var currentMax=0
   var  startP=2;
  while(n!=startP )
  {
      if(n%startP!==0)
      {
        startP++;
      }
      else {
        if(currentMax<n)
        currentMax=n/startP;
        n=n/startP;
      }
  }
  return currentMax==0?n:currentMax;


}


