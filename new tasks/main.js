// const togglebtn = document.querySelector('.btn')
// togglebtn.addEventListener('click', () =>{
//     document.body.classList.toggle("dark")
// })



// let count = 0;



// const plusbtn = document.querySelector('.plus');
// const minusbtn = document.querySelector('.minus');
// const zero = document.querySelector('.zero_btn');
// plusbtn.addEventListener('click', () => {
//     count++;
//     console.log(count);
//     document.querySelector('.zero_btn').innerHTML = count;
// })

// minusbtn.addEventListener('click', () => {
//     count--;
//     console.log(count);
//     document.querySelector('.zero_btn').innerHTML = count;
// })



// const passwordInput = document.getElementById('password');
// const button = document.querySelector('.btn');

// button.addEventListener('click', () => {
//     if (
//         passwordInput.type === "password"
//     ) {
//         passwordInput.type = "text";
//         button.textContent = "close"
//     } 
//     else{
//         passwordInput.type = "password";
//         button.textContent = "open";
//     }
// })





// function addTask() {
//     let taskInput = document.getElementById("taskInput");
//     let taskText = taskInput.value.trim();
//     if (taskText === "") return;
    
//     let li = document.createElement("li");
//     li.innerHTML = `<span>${taskText}</span> <button class="delete-btn" onclick="removeTask(this)">...</button>`;
    
//     document.getElementById("taskList").appendChild(li);
//     taskInput.value = "";
//     updateTaskCount();
// }

// function removeTask(button) {
//     button.parentElement.remove();
//     updateTaskCount();
// }

// function updateTaskCount() {
//     let count = document.getElementById("taskList").children.length;
//     document.getElementById("taskCount").innerText = count;
// }




// let arr = [1, 1, 1, 2, 2, 4, 4];

// let result = arr.filter((arr) =>arr.)