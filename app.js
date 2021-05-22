//Question 1
function convertFahrToCelsius (deg) {
    const result = (deg-32) * 5/9;
    const str = JSON.stringify(deg);

    if(Number(result) && typeof deg !== "boolean" && deg !== "" && typeof deg !== "object" && (!isNaN(deg))){
        console.log(result.toFixed(4))
        return(result)
    }else if(Array.isArray(deg)){
        console.log(`${str} is not a valid number but a/an array.`)
    }else{
        console.log(`${str} is not a valid number but a/an ${typeof deg}.`)
       return(`${str} is not a valid number but a/an ${typeof deg}.`)
    }

}   
convertFahrToCelsius (0)
convertFahrToCelsius ([1,2,3])
convertFahrToCelsius ({temp:0})



//Question 2
function checkYuGiOh(n){
    const array=[];
    const newArray=[];
if(Number(n) && n !== "" && typeof n !== "boolean" && typeof n !== "object"){
    for(let i=1; i<=n; i++){
        array.push(i)
        if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0){
            var str="";
            if(i % 2 === 0 && i % 3 == 0 && i % 5 == 0){
                str +=('yu-gi-oh');
            }  
            else if(i % 2 == 0 && i % 3 == 0){
                str +=('yu-gi');
            }
            else if(i % 2 == 0 && i % 5 == 0){
                str +=('yu-oh');
            }
            else if(i % 3 == 0 && i % 5 == 0){
                str +=('gi-oh');
            }
            else if(i % 2 == 0){
                str +=('yu');
            }
            else if(i % 3 == 0){
                str +=('gi');
            }
            else if(i % 5 == 0){
                str +=('oh');
            }
            newArray.push(str)
        }else{
            newArray.push(i)
        }   
    }
}else{
    console.log(`Invalid Parameter : ${JSON.stringify(n)}`)
    return (`Invalid Parameter : ${JSON.stringify(n)}`)
}
console.log(newArray)
return(newArray)
}   
checkYuGiOh(10)  
checkYuGiOh("5") 
checkYuGiOh("fizzbuzz is meh")  

    
