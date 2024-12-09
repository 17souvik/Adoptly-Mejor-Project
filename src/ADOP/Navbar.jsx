import React from "react";
import "./Navbar.css";


export default function Navbar(){
    const [isSearchActive, setIsSearchActive] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [suggestions, setSuggestions] = React.useState([]);

    const petSuggestions = [
      { name: 'Golden Retriever', type: 'Dog' },
      { name: 'Persian Cat', type: 'Cat' },
      { name: 'Parakeet', type: 'Bird' },
      { name: 'Hamster', type: 'Small Pet' },
      { name: 'Goldfish', type: 'Fish' },
      { name: 'Labrador', type: 'Dog' },
      { name: 'Siamese Cat', type: 'Cat' },
      { name: 'Guinea Pig', type: 'Small Pet' }
    ];

    const handleSearchClick = () => {
      setIsSearchActive(true);
    };

    const handleOverlayClick = (e) => {
      if (e.target.classList.contains('search-overlay')) {
        setIsSearchActive(false);
        setSearchTerm('');
        setSuggestions([]);
      }
    };

    const handleSearchInput = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      
      if (value.trim()) {
        const filtered = petSuggestions.filter(pet => 
          pet.name.toLowerCase().includes(value.toLowerCase()) ||
          pet.type.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
      } else {
        setSuggestions([]);
      }
    };

    const handleSignUpClick = () => {
      alert('Sign Up clicked!');
    };

    return (
      <>
        <nav>
          <div className="logo">
            <img src="logo.png" alt="Logo" className="logo"/>
          </div>

          <div className="nav-links">
            <a href="https://example.com/home">Home</a>
            <a href="https://example.com/about">About</a>
            <a href="https://example.com/services">Services</a>
          </div>

          <div className="search-container">
            <svg className="search-icon" viewBox="0 0 24 24" onClick={handleSearchClick}>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>

          <button className="signup-btn" onClick={handleSignUpClick}>Sign Up</button>
        </nav>

        <div className={`search-overlay ${isSearchActive ? 'active' : ''}`} onClick={handleOverlayClick}>
          <div className="search-input-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search pets..." 
              autoFocus={isSearchActive}
              value={searchTerm}
              onChange={handleSearchInput}
            />
            {suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="suggestion-item">
                    <svg className="suggestion-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                    {suggestion.name} - {suggestion.type}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  };
