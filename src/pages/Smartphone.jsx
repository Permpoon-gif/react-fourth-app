import React from 'react'
import ProductHeader from './../components/ProductHeader'
import Footer from './../components/Footer'

export default function Smartphone() {
    return (
        <>
            <a href="/product" style={{textDecoration: "none"}}> 
            < ProductHeader /> 
            </a>
            
            <h2 style={{ textAlign: "center", color: "#2e06d0" }}>Smartphone Page</h2>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum aspernatur tempore. Voluptatem consequuntur ipsam ab, quis doloribus quam commodi doloremque beatae, sequi id eaque a nihil fugiat nostrum harum?
            </p>
            <Footer />
        </>
    )
}