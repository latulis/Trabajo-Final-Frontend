import React, { useEffect, useState } from 'react';
import './Review.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';

const Review = () => {
    const { reviews, setReviews } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    
    
    useEffect(() => {
        setIsLoading(true);
        
        setIsLoading(false);
    }, []);

    return (
        <div className='container'>
            <div className='review'>
                <header className='headerReview'>
                    <Link to={`/`} className='atrasChat'>
                        <i className="bi bi-arrow-left-circle-fill"></i>
                    </Link>
                    <h1>Reviews</h1>
                </header>
                <div className='lineaDePosteos'>
                    {isLoading ? (
                        <h2 className='cargando'>Cargando</h2>
                    ) : (
                        reviews && reviews.map(post => (
                            <div key={post.id} className='post'>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))
                    )}
                </div>
                <footer className='footerReview'>
                    <Link to='/reviewcreate' className='reviewCreate'>
                        Crear una Review
                    </Link>
                </footer>
            </div>
        </div>
    );
};

export default Review;
