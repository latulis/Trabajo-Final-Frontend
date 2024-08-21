import React from 'react';
import { Link } from 'react-router-dom';
import './ReviewCreate.css';
import { useGlobalContext } from '../../Context/GlobalContext';

const ReviewCreate = () => {
    const { handleCreateReview } = useGlobalContext();
    return (
        <div className='container'>
            <div className='reviewCreate'>
                <header className='headerReviewCreate'>
                    <Link to={'/review'} className='atrasChat'>
                        <i className="bi bi-arrow-left-circle-fill"></i>
                    </Link>
                    <h2 className='headerTitle'>Escribe una review</h2>
                </header>
                <form className='formReview' onSubmit={handleCreateReview}>
                    <label htmlFor="title">Titulo: </label> 
                    <input type="text" id='title' name='title' placeholder='Titulo' />
                    <textarea name="review" id="review" cols="30" rows="10" placeholder='Escribe una review...'></textarea>
                    <button type='submit'>Crear Review</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewCreate;
