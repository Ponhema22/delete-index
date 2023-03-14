//delete an index in an array
let arr=[12,33,23,32,36,54,23,45];
//let user=1;
let user=parseInt(prompt("Enter the index value"));
var result=[];

function deleteIndex(arr,user){

    for(let i=0;i<=arr.length;i++){   
        let flag=true;     
       
    if(i==user){
        flag=false;
        
    }
    else{
        result.push(arr[i]); 
    }
        
 }
 return result;
}
 document.write(deleteIndex(arr,user));