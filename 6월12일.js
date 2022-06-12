// const a =(num1,num2,num3) =>{
//     return num1+num2+num3
// }
// console.log(a(1,2,3)).log()

const a =() => {
    let sum = 0;
    for(let i =2; i<51; i++){       //반복문 사이에 숫자 총합
        if(i%2==0){
            console.log(sum);
            sum = sum+i
        }
    }
    return sum
}
console.log(a())

const arr = ["안","녕","하","세",'요'];
const c =(d) => {
    let sum = ""
    for(let i=0; i<d.length; i++){
        sum = sum+arr[i]
    }
    return sum
}
console.log(c(arr))

//배열함수, 파라미터, 지역함수, 전역변수