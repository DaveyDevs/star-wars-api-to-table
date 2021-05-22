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
            {planets && 
                <table>
                    <caption>Star Wars Planets List</caption>
                    <thead>
                        <tr>
                        <th scope="col">Planet</th>
                        <th scope="col">next</th>
                        <th scope="col">next</th>
                        </tr>
                    </thead>
                    <tbody>
                        {planets.results.map((planet) => 
                        <tr>
                            <th scope="row">{planet.name}</th>
                            <td>{planet.name}</td>
                            <td>{planet.climate}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>
    )
}
