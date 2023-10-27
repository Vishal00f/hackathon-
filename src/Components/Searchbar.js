import React from "react";
import { useState } from "react";
import "./SearchBar.css"
export default function SearchBar({onSubmit}) {
   const [term,setTerm]=useState('');
   const handleSubmit =(event)=>{
    event.preventDefault();
        onSubmit(term);
   }
   const handleChange=(event)=>{
    setTerm(event.target.value);
}
    return (
        <div className='container'>
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <label>Enter city name</label>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
        </div>
    );

}