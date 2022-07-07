import { useState, useEffect } from "react";
import { getDetails } from "../../services/api-calls";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() =>{
    console.log(starshipDetails)
  },[starshipDetails])


  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])



  return ( 
    <div className="entireInfo">
      <div className="icon-container2">
        {starshipDetails ?
        <>
          <h2>Name: </h2>
          {starshipDetails.name}
          <h2>Model: </h2>
          {starshipDetails.model}
        </>
          : 
            <p>Loading</p>
            }
      </div>
        <div id="linkContainer">
          <Link to="/"><button id="returnBtn">Return</button></Link>
        </div>
    </div>
  );
}

export default StarshipDetails;