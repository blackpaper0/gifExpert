import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpert = () => {

    // const initialState = ['One Punch' , 'Samurai X' , 'Dragon Ball']
    const initialState = []

    const [categories , setCategories] = useState(initialState);
    const [selected, setSelected] = useState('');
    

    return (
        <>
            <h2>GifExpert</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ul>
               {categories.map((category ,i )=> {return <GifGrid key={i} category={category} setSelected={setSelected} selected={selected}/>})}
            </ul>
        </>
    )
}

export default GifExpert;
//1NhD1LQHqJ28zy6fM1LiwQG3UpuvUEgt