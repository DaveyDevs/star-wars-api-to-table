import React, { useState, useEffect } from 'react'

export function PlanetList() {
    const [planets, setPlanets] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Paste the API link here to test different pages.
    const API_URL = "https://swapi.dev/api/planets/";

    // Uncomment and use this link to produce URL error:
    // const API_URL = "https://swapi.dev/api/planetss/";


    // API call and error handling
      const getPlanets = async () => {
        try {
          const res = await fetch(API_URL);
          if(!res.ok) {
              throw Error("Not able to access planets.")
          }
          const planetResults = await res.json();

          let planetsAlphabetical = planetResults.results.sort((a,b) => a.name > b.name ? 1 : -1);

          setLoading(false);
          setPlanets(planetsAlphabetical);
          setError(null);
        } catch (e) {
          setLoading(false);
          setError(`Error: ${e.message}`);
        }
      };

    // Spacing large numbers into threes
     const spaceNumber = (number) => {
      let spaced = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      // console.log(spaced);
      return spaced;
     }

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
          console.log(waterSurfaceArea);
            return waterSurfaceArea;
        }
      }
    
      useEffect(() => {
        getPlanets();
      }, []);

    return (
        <div>
            {error && 
                <div>
                    <p>{error}</p>
                </div>}
            {loading && 
                <div>
                    <p>Loading...</p>
                </div>}
            {!error && planets && 
                <div>
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
                            {planets.map((planet) => 
                            <tr key={planet.name}>
                                <th scope="row"><a href={planet.url}>{unknownCheck(planet.name)}</a></th>
                                <td>{unknownCheck(planet.climate)}</td>
                                <td>{unknownCheck(planet.residents).length}</td>
                                <td>{unknownCheck(planet.terrain)}</td>
                                <td>{spaceNumber(unknownCheck(planet.population))}</td>
                                <td>{spaceNumber(getWaterSurfaceArea(planet.diameter, planet.surface_water))}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            } 
        </div>
    )
}
