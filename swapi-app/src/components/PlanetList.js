import React, { useState, useEffect } from 'react'

export function PlanetList() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);

    // Paste the API link here to test different pages.
    const API_URL = "https://swapi.dev/api/planets/";

    // API call
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

    // Checks for data listed as "uknown" in all fields except for water surface area.
      const unknownCheck = (data) => {
          if (data === "unknown") {
              return "?"
          }

          return data;
      }

    // Logic for getting surface area of planet and amount covered by water.
      const getSurfaceArea = (diameter) => {
        let radius = diameter / 2;
        let surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
        return surfaceArea;
      }

      const getWaterSurfaceArea = (diameter, surfaceWater) => {
        let surfaceArea = getSurfaceArea(diameter);
        let surfaceWaterPercent = surfaceWater / 100;
        let waterSurfaceArea = Math.round(surfaceArea * surfaceWaterPercent);

        // Renders a question mark if unknown.
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
                                <th scope="row"><a href={planet.url}>{unknownCheck(planet.name)}</a></th>
                                <td>{unknownCheck(planet.climate)}</td>
                                <td>{unknownCheck(planet.residents).length}</td>
                                <td>{unknownCheck(planet.terrain)}</td>
                                <td>{unknownCheck(planet.population)}</td>
                                <td>{getWaterSurfaceArea(planet.diameter, planet.surface_water)}</td>
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
