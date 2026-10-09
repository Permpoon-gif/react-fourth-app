import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import NavBarMain from './../components/NavBarMain'
export default function NotFound() {
    return (
        <>
            <NavBarMain />
            <Header />
            <h2 style={{ textAlign: "center", color: "#d00906" }}>
                404 Page Not Found🥓</h2>

            <Footer />
        </>

    )
}