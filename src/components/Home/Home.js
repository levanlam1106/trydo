import React from 'react'
import { Link } from 'react-router-dom'
import "../../assets/style/Home.css"
function Home() {
    return (
        <div className='home'>
            <div className='home1'>
            <div className='container'>
                <div className='row'>
                    <h1 className='a'>creative</h1>
                    <p>There are many variations of passages
                         of Lorem Ipsum available but the 
                         majority have suffered alteration.</p>
                    <div className='home-btn'>
                        <Link  to='/' >contact us</Link>
                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
