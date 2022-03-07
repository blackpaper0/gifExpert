import React, { useState } from 'react';



const AddCategory = ({setCategories}) => {

    

    const [Value, setValue] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault();
        if(Value==""){
            throw new Error('tiene que haber un valor')
        }
        setCategories(cats => [Value , ...cats ]);
        setValue("");
     };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={({target})=>{ setValue(target.value) }} 
                value={Value}
                placeholder="tag"
            />

        </form>
    )
}

export default AddCategory