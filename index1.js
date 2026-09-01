
const root=document.getElementById("container");
const button=document.getElementById("btn");
const disp= document.getElementById("disp");
const loader= document.getElementById("loader");

async function fetchData(){
    //alert("hii");
    
    try{
        loader.innerHTML = '<h2>Loading data..</h2>';
        const serverdata= await fetch('https://fakestoreapi.com/products');
        const jsondata = await serverdata.json();
        // disp.innerHTML = `${jsondata[0].title}`;

        let table = `<table border =5px>
        ${
            jsondata.map((ele) =>(
                `<tr>
                <td><img src=${ele.image} height=200 width=200></img></td>
                <td>${ele.title}</td>
                <td>${ele.description}</td>
                <td>${ele.price}</td>
                <td>${ele.category}</td>
                </tr>`
            ))
        }

        </table>`
        disp.innerHTML = table;
    }
    catch(e){
        console.log("Error is "+e);
    }
    finally{
        loader.innerHTML = "";
    }
}

button.addEventListener('click',fetchData);