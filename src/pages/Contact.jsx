import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import NavBarMain from './../components/NavBarMain'
export default function Contact() {
    return (
        <>
            <NavBarMain />
            <Header />
            <h2 style={{ textAlign: "center", color: "#2e06d0" }}>Contact Page</h2>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum aspernatur tempore. Voluptatem consequuntur ipsam ab, quis doloribus quam commodi doloremque beatae, sequi id eaque a nihil fugiat nostrum harum?
            </p>
            <Footer />
        </>
    )
}