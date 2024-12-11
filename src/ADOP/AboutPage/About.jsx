import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './About.css';




export default function About(){
    const reviews = [
        {
            name: "Jessica Smith",
            initial: "JS",
            rating: 5,
            date: "June 15, 2023",
            text: "Found my perfect companion through PetPals! The adoption process was smooth and the support was amazing. My new dog Max has brought so much joy to our family.",
        },
        {
            name: "Robert Johnson",
            initial: "RJ",
            rating: 5,
            date: "May 28, 2023",
            text: "Incredible platform! The verified breeders gave us peace of mind when choosing our kitten. The follow-up care and support exceeded our expectations.",
        },
        {
            name: "Maria Garcia",
            initial: "MG",
            rating: 5,
            date: "July 2, 2023",
            text: "As a first-time pet owner, I appreciated how PetPals guided me through the entire process. Their pet welfare specialists were knowledgeable and caring.",
        }
    ];

    const renderStars = (rating) => {
        return "★".repeat(rating) + "☆".repeat(5-rating);
    };

    return (
    <>
        <Navbar/>
        <div className="about-container">
            <section className="hero-section">
                <div>
                    <h1 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>About PetPals Marketplace</h1>
                    <p style={{fontSize: '1.2rem', color: 'white'}}>Connecting loving homes with furry friends since 2023</p>
                </div>
            </section>

            <section className="content-section">
                <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Our Mission</h2>
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'black'}}>
                    At PetPals Marketplace, we believe every pet deserves a loving home. Our platform connects responsible breeders and shelters with caring families, ensuring the best possible match for both pets and their new owners.
                </p>

                <div className="stats-container">
                    <div className="stat-card">
                        <div className="stat-number">10,000+</div>
                        <div>Happy Pets Adopted</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">1,000+</div>
                        <div>Verified Breeders</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">98%</div>
                        <div>Satisfaction Rate</div>
                    </div>
                </div>

                <h2 style={{textAlign: 'center', margin: '4rem 0 2rem'}}>Meet Our Team</h2>
                <div className="team-section">
                    <div className="team-member">
                        <div className="member-avatar">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="40" r="25" fill="#4a90e2"/>
                                <circle cx="50" cy="90" r="35" fill="#4a90e2"/>
                            </svg>
                        </div>
                        <h3>Sarah Johnson</h3>
                        <p className='about'>Founder & CEO</p>
                        <div className="social-icons">
                            <a href="https://linkedin.com">LinkedIn</a>
                            <a href="https://twitter.com">Twitter</a>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="40" r="25" fill="#4a90e2"/>
                                <circle cx="50" cy="90" r="35" fill="#4a90e2"/>
                            </svg>
                        </div>
                        <h3>Mike Chen</h3>
                        <p className='about'>Head of Operations</p>
                        <div className="social-icons">
                            <a href="https://linkedin.com">LinkedIn</a>
                            <a href="https://twitter.com">Twitter</a>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="40" r="25" fill="#4a90e2"/>
                                <circle cx="50" cy="90" r="35" fill="#4a90e2"/>
                            </svg>
                        </div>
                        <h3>Emily Rodriguez</h3>
                        <p className='about'>Pet Welfare Specialist</p>
                        <div className="social-icons">
                            <a href="https://linkedin.com">LinkedIn</a>
                            <a href="https://twitter.com">Twitter</a>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="40" r="25" fill="#4a90e2"/>
                                <circle cx="50" cy="90" r="35" fill="#4a90e2"/>
                            </svg>
                        </div>
                        <h3>David Thompson</h3>
                        <p className='about'>Veterinary Director</p>
                        <div className="social-icons">
                            <a href="https://linkedin.com">LinkedIn</a>
                            <a href="https://twitter.com">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="reviews-section">
                    <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>What Our Users Say</h2>
                    <div className="review-grid">
                        {reviews.map((review, index) => (
                            <div className="review-card" key={index}>
                                <div className="review-header">
                                    <div className="reviewer-avatar">
                                        {review.initial}
                                    </div>
                                    <div>
                                        <h3>{review.name}</h3>
                                        <div className="stars">{renderStars(review.rating)}</div>
                                        <div className="review-date">{review.date}</div>
                                    </div>
                                </div>
                                <p className='about'>{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </>
    );
};
