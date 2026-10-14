import {useEffect, useState} from "react";

function FetchProducts(){
    const[data,setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            try{
                const res = await fetch("https://dummyjson.com/products");
                const jsonData = await res.json();
                setData(jsonData.products);
                console.log(jsonData.products);
            }catch(e){
                console.log("Error is " + e)
            }
            
        }
        fetchData();
    },[])
    return(
        <div>
            {
                data.map((ele) =>(
                    <div style = {{border:'4px solid red',height :'200px',margin:'20px'}}>
                        <h2>${ele.id}</h2>
                        <h2>${ele.title}</h2>
                        <p>${ele.description}</p>
                        <button> Add to Cart</button>
                    </div>
                    
                    )
                )

            }
        </div>
    )
}
export default FetchProducts