import React, { useState, useEffect } from 'react'

export function PlanetList() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);


    const API_URL = "https://swapi.dev/api/planets/";

      const getPlanets = async () => {
        try {
          const res = await fetch(API_URL);
          const planetResults = await res.json();
          setPlanets(planetResults);
          setLoading(false);

          console.log(planetResults);
          console.log(planets);
        } catch (e) {
          console.error(e);
        }
      };
    
      // App.js continued
    //   const userSettings = {
    //     dogs: dogs,
    //     loading: loading,
    //     setDogs,
    //     setLoading,
    //   };
    
      useEffect(() => {
        getPlanets();
      }, []);

    return (
        <div>
            <p>The planets component!</p>
            {loading ? 
                <div>
                    <p>Loading...</p>
                </div>
                :
                <p>Planets!</p>
            }
            {/* {planets && <div>{planets}</div>} */}
        </div>
    )
}
