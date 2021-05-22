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

      const getSurfaceArea = (diameter) => {
        let radius = diameter / 2;
        let surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
        return surfaceArea;
      }

      
      const getWaterSurfaceArea = (diameter, surfaceWater) => {
        console.log(diameter);
        console.log(surfaceWater);

        let surfaceArea = getSurfaceArea(diameter);
        let surfaceWaterPercent = surfaceWater / 100;

        console.log(surfaceArea);
        console.log(surfaceWaterPercent);

        let waterSurfaceArea = Math.round(surfaceArea * surfaceWaterPercent);

        console.log(waterSurfaceArea);

        if (isNaN(waterSurfaceArea)) {
            return "?";
        } else {
            return waterSurfaceArea;
        }
      }
    
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
                <div>
                {planets && 
                    <table>
                        <caption>Star Wars Planets List</caption>
                        <thead>
                            <tr>
                            <th scope="col">Planet</th>
                            <th scope="col">Climate</th>
                            <th scope="col">Residents</th>
                            <th scope="col">Terrains</th>
                            <th scope="col">Population</th>
                            <th scope="col">Surface area covered by water (km<sup>2</sup>)</th>
    
                            </tr>
                        </thead>
                        <tbody>
                            {planets.results.map((planet) => 
                            <tr key={planet.name}>
                                <th scope="row">{planet.name}</th>
                                <td>{planet.climate}</td>
                                <td>{planet.residents.length}</td>
                                <td>{planet.terrain}</td>
                                <td>{planet.population}</td>
                                <td>{getWaterSurfaceArea(planet.diameter, planet.surface_water)}</td>
                                {/* <td>{Math.round(getSurfaceArea(planet.diameter) * parseFloat(planet.surface_water) / 100.0)}</td> */}
                            </tr>
                            )}
                        </tbody>
                    </table>
                }
                </div>
            }
        </div>
    )
}
