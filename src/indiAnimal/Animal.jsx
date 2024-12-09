import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AllData from "../ADOP/Data/Data";
import Footer from "../ADOP/Footer";
import Navbar from "../ADOP/Navbar";
import './Animal.css';
export default function Animal() {
  const { category, id } = useParams();
  const [animalDetails, setAnimalDetails] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const Data = AllData();
    const animal = Data.find(animal => animal.id === parseInt(id) && animal.category.toLowerCase() === category.toLowerCase());
    setAnimalDetails(animal);
  }, [category, id]);

  const handleAdoptClick = () => {
    alert(`Thank you for choosing to adopt ${animalDetails.breed}!`);
  };

  const handleSeeMoreClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar/>
      {animalDetails ? (
        <div className="animal-card">
          <img src={animalDetails.image} alt={animalDetails.breed} />
          <div className="info">
            <h3>{animalDetails.breed}</h3>
            <p><strong>Location:</strong> {animalDetails.place}</p>
            <p className="description"><strong>Description:</strong> {animalDetails.description}</p>
            <p className="price">Price: ₹{animalDetails.price}</p>
            <div className="button-container">
              <NavLink  to={`/adoptly/${category}/${id}/Payment`} 
                            state={{ price: animalDetails.price }}>
                              <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button></NavLink>
              <button className="see-more-button" onClick={handleSeeMoreClick}>See More</button>
            </div>
          </div>
        </div>
    
      ) : (
        <p>Animal not found!</p>
      )}
      <Footer/>
    </div>
  );
}
