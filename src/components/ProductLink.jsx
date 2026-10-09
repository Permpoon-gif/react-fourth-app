import React from 'react'

export default function ProductLink({ url, title, bgcolor }) { //props ชื่อ url และ title
    const a_link = {
        color: "white",
        textDecoration: "none",
        padding: "6px 10px",
        borderRadius: "5px",
        backgroundColor: bgcolor,
    };
    return (
        <>
            <a href={url} style={a_link}>{title}</a>
        </>
    )
}
