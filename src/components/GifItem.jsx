import React, { useState } from 'react';



const GifItem = ({url  , username , title}) => {
  return (
    <div className="card animate__animated animate__backInDown">
        <img src={url} alt={title}  />
        <div>
            <h1>{title}</h1>
            <h2>{username}</h2>
        </div>
    </div>
  )
}

export default GifItem