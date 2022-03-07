import React, { useState, useEffect } from 'react';
import GifItem from './GifItem';
import { getGif } from '../helpers/getGifs'
import { useFetchGif } from '../hook/useFetchGif';




const GifGrid = ({ category, selected, setSelected }) => {

    const { data, loading } = useFetchGif(category);







    return (

        <li><h3>{category}</h3>
            {loading && <p className="animate__animated animate__bounce">cargando</p>}
                <div className="card-grid">
                    {
                        data.map(imgs => <GifItem
                            key={imgs.id}
                            url={imgs.images.downsized.url}
                            username={imgs.username}
                            title={imgs.title}
                        />
                        )
                    }
                </div>


        </li>
        // categories.map((category , i)=> <li key={i}>{category}</li>)

    )
}

export default GifGrid