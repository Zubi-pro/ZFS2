import React from 'react'

import ServiceList from './ServiceList'
const Services = () => {
    return (
        <>
            <section style={{ "padding": "5px 5%" }} className="section">
                <div className="text">
                    <h1 style={{ "fontSize": "60px" }}>Our services</h1>
                    <p>
                        Our dispatch services are designed to enhance your trucking operations with expert load planning, real-time tracking, and dedicated support. Our team negotiates with brokers and shippers to secure the best rates and terms for your business, while ensuring accurate documentation and compliance with regulations. We handle driver scheduling, routing, and communication, freeing up your time to focus on growing your business. With our customized reporting tools, you'll get detailed insights into your fleet's performance, helping you make informed decisions to optimize your operations. Our goal is to provide best-in-class dispatch services that streamline your operations, reduce costs, and increase profitability.

                    </p>
                </div>
                <div className="image">
                    <img style={{ "width": "50%", "borderRadius": "10px" }} src="../Pics/goals.jpeg" alt="Description" />
                </div>
            </section>

            <ServiceList/>
        </>
    )
}

export default Services
