import React from 'react'
import Button from './Button'

const About = () => {
    return (
        <>
            <section style={{ "padding": "50px 5px" }} className="section">
                <div className="text">
                    <h1 style={{ "fontSize": "60px" }}>Streamlined and Reliable Logistics Solutions</h1>
                    <p>
                    Zenith Freight Solutions is a leading trucking dispatch company based in the USA. With years of industry experience, our team of seasoned dispatchers stays ahead of the curve, utilizing the latest technology and best practices to empower businesses and ensure the efficient delivery of goods.
                    </p>
                    <Button  title= "Contact Us"/>
                </div>
                <div className="image">
                    <img style={{ "width": "100%", "borderRadius": "10px" }} src="../Pics/logo2.jpeg" alt="Description" />
                </div>
            </section>
        </>
    )
}

export default About