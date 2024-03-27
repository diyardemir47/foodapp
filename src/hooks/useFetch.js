import { useEffect, useState } from "react"

const useFetch=(url,method="GET") => {

    const [data,setData] =useState(null);
    const[error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [options,setOptions]=useState(null);

const postData=(data)=> {
    setOptions({

method:"POST",
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify(data)

})
}

    useEffect(()=> {
//promise
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data))
//async-await
const fetcData=async(options)=> {
    setIsLoading(true);
    try{
        const res=await fetch(url,{...options});
        if(!res.ok) {
            throw new Error (res.statusText);
        }
        const data=await res.json();
            setIsLoading(false);
        setData(data);
    }

    catch(err) {
        setIsLoading(false);
        setError("hata");
        console.log(err.message);
    }
    
}
if(method=="GET" ) {
    fetcData();
}
if(method=="POST" && options) {

    fetcData(options)
}

fetcData();

    },[url,options,method])

    return {
data:data ,isLoading,error,postData

    }
}

export default useFetch;

