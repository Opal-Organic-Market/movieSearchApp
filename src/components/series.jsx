import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Series() {

    const [movieSeries, setMovieSeries] = useState([]);

   
        const url = "https://api.themoviedb.org/3/trending/tv/day?api_key=0d54830a793847999884f168688c8735"
        


        useEffect(() => {
            async function getSeries() {
                try {
                    const response = await axios.get(url);
                    const responseJson = response.data.results;
                    console.log("response", responseJson);
                    setMovieSeries(responseJson);

                } catch (error) {
                    console.log(error);
                }
            }
            getSeries();
        }, []);

    
    return (
        <section>
            <h1>Series</h1>

            {movieSeries.map((item, index) => (
                <div>
                    <div>{item.name}</div>
                    <div>{item.id}</div>
                    {/* <div>{item.overview}</div> */}

                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                </div>

            ))}



        </section>
    )
}











