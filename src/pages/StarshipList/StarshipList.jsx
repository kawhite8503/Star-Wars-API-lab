import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/api-calls";

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return ( 
    <>
      <div>
        <div>
          {starships.map((starship,idx) =>
            <Link key={idx} to='/starship' state={{starship}}>
              <div className="icon-container">
                {starship.name}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default StarshipList;