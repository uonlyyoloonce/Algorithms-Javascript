var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('sample.txt')
  });
  lineReader.on('line', function (line) {
    a_temp.push(line);
  }).on('close',main);
/////////////// ignore above this line ////////////////////
var test={};
var a_temp = [];
function main() {

    var n = 30;
    var m =4;
  var arr=[];
  var IndexArr=[];
    

    var curremtMax=0;
    var obj={};
    for(var a0 = 0; a0 < m; a0++){
        var lastarr=arr.concat();
        var a = parseInt(a_temp[a0].split(' ')[0]);
        var b = parseInt(a_temp[a0].split(' ')[1]);
        var k = parseInt(a_temp[a0].split(' ')[2]);
        var n=0;
        if(a0==0){
            var tempobj={};
            obj.range=a+'|'+b;
            obj.arr=[];
            tempobj['a'+a+'a'+b]=k;
            obj.arr.push(tempobj);
            curremtMax=k;
            IndexArr[n]=a;
            n++;
        }
        else{
          
           
           

        }
     
        }
        console.log(curremtMax);
    } 
   

