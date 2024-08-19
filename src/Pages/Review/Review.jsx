import React, { useEffect, useState } from 'react'
import './Review.css'
import { Link } from 'react-router-dom'

const review = () => {
    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const obtenerPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET"
        })
        const posts = await response.json()
        setPosts(posts)
        setIsLoading(false)
    }
    useEffect(()=> {
        obtenerPosts()
    }, [])
    
    console.log(posts)
    return (
        <div className='container'>
            <div className='review'>
            <header className='headerReview'>
            <Link to={`/`} className='atrasChat'><i className="bi bi-arrow-left-circle-fill"></i></Link>
            <h1>Reviews</h1>
            </header>
            <div className='lineaDePosteos'>
            {
                isLoading 
                ?
                <h2 className='cargando'>Cargando</h2>
                :
                posts && posts.map(post => 
                    <div key={post.id} className='post'>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                )
                
            }
            </div>
            <footer className='footerReview'>
                    <button className='reviewCreate'>
                        Crear una Review
                    </button>
                </footer>
            
        </div>

        </div>
        
    )
}

export default review