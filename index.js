// console.log("hello");l
//git init for initialising git 
//git branch -M main --> branch ka name main rkhne k liye
//git add . --> for adding new file
//git commit -m "Initial commit" -->pehla commit
//git remote add origin https://github.com/devanshv67/Fsd-5th-sem-.git --> for adding repository
// git status          # Check changes
// git add .           # Stage changes
// git commit -m "..." # Save snapshot
// git push            # Upload to GitHub
// git pull            # Download latest changes

//index.js me changes krne k baad push krne ka method 
// git status
// git add .
// git commit -m "Meaningful message"
// git push

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2))



// function sqrt(a,b){
//     return Math.sqrt(a+b)
// }

// console.log(sqrt(2,3))





// const sum=function(a,b){
//     return a+b;
// }
// console.log(sum(2,6))




// const sum = (a,b) => {return a+b}
// console.log(sum(3,3))




// (()=>{
//     console.log("Using IIFE")
// })();




// var a = 23;
// console.log(typeof(a))

// if(a<40){
//     var a = 40;
//     console.log("Value of a inside block = "+a);
// }
// console.log("Value of a outside block = "+a);




// function sum(a,b){
//     return a+b;
// }

// function msgwithsum(clbk,msg){
//     const result = clbk(40,50);
//     console.log("hii , "+msg+" your result is = "+ result)
// }
// msgwithsum(sum,"sahil")





// function login(error,msg){
//     if(error){
//         console.log("login failed : "+ error);
//     }
//     else{
//         console.log("Login successfull : "+msg);
//     }
// }

// function loginhandler(username,password,clbk){
//     if(username=="sahil" && password=="2121"){
//         clbk(null,"login success")
//     }
//     else{
//         clbk("Usrname or password is incorrect",null)
//     }
// }

// loginhandler("sahil","2121",login)


// console.log("one");
// setTimeout(()=>{console.log("Two");});
// console.log("Three");


const container =document.getElementById("container");
const button =document.querySelector("button");
// console.log(container);
// console.log(button);

const h1 = document.createElement("h1");
console.log(h1);
h1.innerHTML("abes Engineering College");
function ping(){
            //alert("server ping");
            container.innerHTML="";

            const img = document.createElement("img");
            img.src = "Profile.jpg";
            img.alt = "Mohd Sahil";
            img.width = 150;
            img.height = 150;
            
            const h1 = document.createElement("h1");
            h1.innerText = "Mohd Sahil";

            const role = document.createElement("p");
            role.innerText = "Abes Enginnering College";

            const about = document.createElement("h2");
            about.innerText = "About me";

            const aboutme = document.createElement("p");
            aboutme.innerText = "I'm Doing Computer Science Engineering And Interested In Web Development";

            const education = document.createElement("h2");
            education.innerText = "Education"

            const educationtext = document.createElement("p");
            educationtext.innerHTML = '<strong>Btech-Computer Science Engineering</strong><br>Abes Engineering College';


            container.appendChild(img);
            container.appendChild(h1);
            container.appendChild(role);
            container.appendChild(about);
            container.appendChild(aboutme);
            container.appendChild(education);
            container.appendChild(educationtext);
            button.style.display="none";











        }
button.addEventListener("click" , ping);