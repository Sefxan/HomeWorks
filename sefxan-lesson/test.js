// let arr = []

// let products = [
//     {id: 1, name: 'Apple'},
//     {id: 2, name: 'Samsung'},
//     {id: 3, name: 'Redmi'},
//     {id: 4, name: 'Huawe'},
// ];


// function myId(id, arr = [] ){
// let redmi  =  products.find(a =>a.id===id)
// arr.push(redmi)
// }

// myId(3, products)
// console.log(arr);




// const wishlist = [];
// const products = [
//     {id: 1, name: 'iphone 10'},
//     {id: 2, name: 'iphone 11'},
//     {id: 3, name: 'iphone 12'},
// ]

// const wishlist = newWishlist('wishlist');
// document.querySelector('Add to Wishlist')





// function myPhone (name, ram, storage, camera, prosessor){
//     this.name = name;
//     this.ram = ram;
//     this.storage = storage;
//     this.camera = camera;
//     this.prosessor = prosessor
// }


// const phone = new myPhone('Iphone', '8gb', '256gb', '50px', '2CPUI');

// console.log(phone instanceof myPhone );

// let element = document.querySelector('form')

// function addphone(e){

//     e.preventDefault();

//     let name = document.getElementById('name').value
//     let ram = document.getElementById('ram')
//     let storage = document.getElementById('storage')
//     let camera = document.getElementById('camera')
//     let prosessor = document.getElementById('prosessor')

//     let myPhone = 
// }

function Student(name, age, position){
    this.f_name = name
    this.age = age
    this.position = position
}

let formElement = document.querySelector("form");
let student [];


function newStudent(e) {
    e.preventDefault();


    let student_name = document.getElementById('studentName').value;
    let student_age = document.getElementById('studentAge').value;
    let student_position = document.getElementById('position').value;
    let text = document.querySelector("text_container");
    let newStudent = new Student(student_name, student_age, student_position);
    students.push(newStudent);
    console.log({students});
    students.map(
        (std) => text.innerHTML +=
    )
}




















