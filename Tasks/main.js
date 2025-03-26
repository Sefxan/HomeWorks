// let number = prompt("eded daxil edin")

// for(let i=0; i<=100; i++)
// if(i%2==0){
//         console.log("i")
//    }
//else{
   // console.log(i+ "cut")
// }        
// function getSum(num1,num2)
// getSum(40+10)

//let sum()
 


//for(let i = 1; i<=50; i++)
     //result += i;



//let result = 0



// //function getSum(number)
// //let result = 0
// // for(let i=1; i<=number; i++)
// //    {result+=i}
// //  return result;
// //  console.log(getSum(50))


// //function checkNumber(num1,num2){
// //    for(let i = 1; i<=100; i++)
// //        if(i%num1==0 && i%num2==0)
// //            console.log(i)
// //}
// // let square=0

// // function checkNumber2(num1,num2)
// //  for(let i = 1; i<=20; i++)
// //     console.log(square)
    

// // function factorial(x){
// //     let result = 1;
// //     for(let i =1; i<=x; i++){
// //         result = i * result
// //     }
// //     return result;

// // }
// //  function sayi(say1, say2){
// //     let toplam = say1 + say2;
// //     console.log(toplam);
    
// //  }

// // sayi(20, 40)






// // function sayi (say4, say5){
// //     let toplam = say4 + say5;
// //     console.log(toplam);

    
// // }







// // let str = "this is str";
// // let value;
// // value = str.substring()
// // // value = str.includes("this is")




// // console.log(value,);




// // function fullNameConvertor(name,surname){
// //  let word=name.toUpperCase()
// //  let word2=surname.toUpperCase()
// //  let result=name +surname

// //  console.log(fullNameConvertor);
 
// // }

// // function getValidUsermail(email=""){
// //    if (email.includes("@") && email.endsWith("gmail.com") ){
// //       return true
// //    }
// //    else {
// //      return false
// //    }
// // }

// // let result= getValidUsermail("besirovsefxan@gmail.com")

// // console.log(result);


// let header=document.querySelector(".header")

// let nav=document.createElement("h1")
// nav.innerText="Logo"
// nav.style.color="red"
// header.appendChild(nav)

// let nav_bar=document.createElement("ul")
// header.appendChild(nav_bar)

// let menu_item=document.createElement("li")
// let menu_item2=document.createElement("li")
// let menu_item3=document.createElement("li")

// nav_bar.appendChild(menu_item)
// nav_bar.appendChild(menu_item2)
// nav_bar.appendChild(menu_item3)


// menu_item.innerText = "Home"
// menu_item2.innerText = "About"
// menu_item3.innerText = "Service"


// nav_bar.style.display=flex




// function getAverage(arr=[]){
//    let sum = 0;
//    arr.map((i)=> 
//    sum+=i)
//    return sum/arr.length
// }
// let result = getAverage([10,50,100])
// console.log(result);


// function getAverage(arr = []){
//    let sum=0
//    arr.map((i)=>sum = sum + i)
//    return sum/arr.length
// }
// let result = getAverage([10,50,100])
// console.log(result);

function getIndex(myArray = [], index){
 let result = myArray[index]
 return result;
}

function sliceFunc(myArray = [], sliceCount){
   let result = myArray.slice(sliceCount)
   return result;
  }

  function spliceFunc(myArray = [], element){
   
   for(i = 0; i < myArray.length; i++){
     if(myArray[i] == element){
      myArray.splice(i, 1);
     }
   }
   
   return myArray;
  }
  function negativeNumbers(myArray = []){
   let negArr = myArray.filter(el = el => 0)
  
   return negArr;
  }
 



    let str = "Hello, World!";

let reversedStr = str.split('').reverse().join('');

// // console.log(reversedStr);


// function firstReverse(str){

//   let arr = str.split("")

//   let reverseArr = arr.reverse()

//   let newStr = reverseArr.join

//   return arr
// }

// const numbers = [1, 2, 3, 4]
//  numbers.some(check);
//  function check(numbers){
//   return 
//  }

// let numbers = [1, 2, 3, 4 ]

// let newNum = numbers.find(num => num > 3 )

// console.log(newNum);


// const arr = ["mən azərbaycanlıyam"]
 
// console.log(arr.includes(mən));


// let name = "Per harold borgen"

// let greeting = "hi my name is "

// let myGreeting = name + greeting

// console.log(myGreeting);


// let myPoints = 3


// function add3Points() {
//   myPoints += 3
// }



// function removelPoints() {
//   myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()


// console.log(myPoints);



let submit.addEventListener ('click', function (e){

  e.preventDefault()
   
  console.log('salam');
  
})











