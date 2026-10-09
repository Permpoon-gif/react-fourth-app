import React from 'react'
import Header from './../components/Header';
import Footer from './../components/Footer';
import NavBarMain from './../components/NavBarMain';
import hero from './../assets/hero.png';
export default function Home() {
    return (
        <>
            <NavBarMain />
            <Header />
            <h2 style={{ textAlign: "center", color: "#2e06d0" }}>Home Page</h2>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>

            {/* รูปจาก public */}
            <img
                src="/super.png"
                alt="Super"
                style={{ width: "100px" }}
            />

            {/* รูปจาก src/assets */}
            <img
                src={hero}
                alt="hero"
                style={{ width: "200px" }}
            />
            <Footer />
        </>
    )
}