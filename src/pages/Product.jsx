import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import NavBarMain from './../components/NavBarMain'
import ProductLink from '../components/ProductLink'
export default function Product() {
    return (
        <>
            <NavBarMain />
            <Header />
            <h2 style={{ textAlign: "center", color: "#2e06d0" }}>Product Page</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <ProductLink url="/product/Computer" title="COMPUTER" bgcolor="#12703d" />
                <ProductLink url="/product/Smartphone" title="SMARTPHONE" bgcolor="#ff0000" />
            </div>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum aspernatur tempore. Voluptatem consequuntur ipsam ab, quis doloribus quam commodi doloremque beatae, sequi id eaque a nihil fugiat nostrum harum?
            </p>
            <Footer />
        </>
    )
}