import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function SearchBar() {

    const [keyword,setKeyword]=useState('');
    const navigate=useNavigate();

const handleSubimt=(e) =>{

    e.preventDefault();
    navigate(`/search?q=${keyword}`);
}

    return (

  
        
        <form onSubmit={handleSubimt} >
<input 
type="search" 
className="form-control " 
placeholder="Search..." 
onChange={(e)=>setKeyword(e.target.value)} />

        </form>
      
    )
}