import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Serieslist = () => {
       
    const [serieslist, setSerieslist] = useState([]);

   
        const url = "https://api.themoviedb.org/3/discover/tv?api_key=0d54830a793847999884f168688c8735"
        


        useEffect(() => {
            async function getSerieslist() {
                try {
                    const response = await axios.get(url);
                    const responseJson = response.data.results;
                    console.log("response", responseJson);
                    setSerieslist(responseJson);

                } catch (error) {
                    console.log(error);
                }
            }
            getSerieslist();
        }, []);



  return (
    <div>
            {/* add browse for more so when user clicks on it it shows all movies */}

      <div className="flex justify-center mt-9">
        <div className="container"> <span className="font-extrabold	">Series</span>
          <div className=" flex overflow-auto gap-x-2  ">
            {serieslist.map((item, index) => (
              <div key={index} className="flex-shrink-0 ">
                <Link to={'/moviedetailspage/' + item.id}>
                <div className=" w-48 h-auto p-4 rounded-md ">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="series"
                    className="h-64 rounded-md "
                  />
                  <h2 className="mt-2 text-base font-semibold truncate h-7 ">
                    {item.original_name}
                  </h2>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Serieslist;