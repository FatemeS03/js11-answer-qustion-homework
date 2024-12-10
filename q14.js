// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const obj = { number: 6043, age: 21, pt: 96 };

const value= Object.values(obj)
console.log(value)


let arr2=[]
for(const value2 in obj){
    
 arr2.push(obj[value2])

}
console.log(arr2)
const value3=({number,age,pt})=>{
    return [number,age,pt]
}
console.log(value3(obj))