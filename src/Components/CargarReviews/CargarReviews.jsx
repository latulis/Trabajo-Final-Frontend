import React from 'react'
import { useGlobalContext } from '../../Context/GlobalContext';
import { useEffect, useState } from 'react';

const CargarReviews = () => {
    const { reviews, setReviews } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    
    
    useEffect(() => {
        setIsLoading(true);
        
        setIsLoading(false);
    }, []);
  return (
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
  )
}

export default CargarReviews
