// var a = "abc"

// console.log(a);



// for(var i=4;i<13;i++){
//     console.log(i)  //4,5,6,7,8,9,10,11,12
// }

// for(var i=12;i>4;i--){
//     console.log(i)   //12,11,10,9,8,7,6,5
// }

//  for(var i=0; i<5;i++){
//      for(var j=0; j<5 ;j++){
//      console.log(`${i} + ${j} = ${i+j}`)
//      }
//  }

// for(var i=1; i<10;i++){
//     for(var j=1;j<=9;j++){
//         console.log(i,"*",j,"=",i*j)
//     }
//}    구구단 


// var sum = 0;
// for(var i=1; i<11; i++){
//     if(sum>40){     //sum이 45보다 크면 멈춰라 니까 45까지 출력
//         break;
//     }
//     sum = sum+i;    // 45= 36+9
//     console.log(sum);   
//  }


// function add(a,b){
//     return a + b;
// }
// var a = add(1,2)
// console.log(a);

// function 자판기(동전){
//     return "음료수"
// }
// 자판기(500)
// console.log(500);


function sum12(a){
    if(a==500){
        return "사이다"
    }else if(a==600){
        return "콜라"
    }else{
        return "물"
    }
}
console.log(sum12(99999)); // 500이면 사이다 그게아니면 밑에조건으로 내려가서 600이면 콜라 그게아니면 밑에조건으로 내려가서 그 외에 다른 숫자를 집어넣으면 물을 뽑아라.





 
