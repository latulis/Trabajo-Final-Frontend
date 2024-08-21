import React, { useEffect, useState } from 'react';
import './Review.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';
import { CargarReviews } from '../../Components';

const Review = () => {
    const { reviews, setReviews } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='container'>
            <div className='review'>
                <header className='headerReview'>
                    <Link to={`/`} className='atrasChat'>
                        <i className="bi bi-arrow-left-circle-fill"></i>
                    </Link>
                    <h1>Reviews</h1>
                </header>
                <CargarReviews />
                <footer className='footerReview'>
                    <Link to='/reviewcreate' className='linkReviewCreate'>
                        Crear una Review
                    </Link>
                </footer>
            </div>
        </div>
    );
};

export default Review;
