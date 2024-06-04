// pages/Home.jsx
import React from 'react';
import '../styles/home.css';


function Home() {

    
    return (
        <div className="home">
            <section style={{ "padding": "50px 5px" }} className="section">
                <div className="text">
                    <h1 style={{ "fontSize": "3rem" }}>Welcome to  Zenith Freight Solutions LLC</h1>
                    <p style={{"fontSize" : "1.5rem"}}>
                        Rolling Loads , Delivering Success

                    </p>
                </div>
                <div className="image">
                    <img style={{ "width": "100%", "borderRadius": "10px" }} src="../Pics/homePic3.jpeg" alt="Description" />
                </div>
            </section>
            
            <hr />

            <section style={{"backgroundColor" : "#e5e5e5" , "borderRadius" : "15px"}} className="section">
                <div className="image">
                    <img src="../Pics/homePic1.jpeg" alt="Description" />
                </div>
                <div className="text">
                    <h6>First Of All</h6>
                    <h1>Streamline Your Transportation Operations</h1>
                    <p>
                        Discover how  Zenith Freight Solutions can empower your business by providing streamlined and reliable logistics solutions. Our team of seasoned dispatchers, equipped with the latest technology and industry expertise, ensures the efficient delivery of your goods.

                    </p>
                </div>
            </section>


            <section  className="section reverse">
                <div className="image">
                    <img style={{"width" : "60%"}} src="../Pics/services.jpeg" alt="Description" />
                </div>
                <div className="text">
                    <h6>Not to mention</h6>
                    <h1>Our Services</h1>
                    <p>
                        Discover our comprehensive range of services designed to optimize your transportation operations and ensure the efficient delivery of goods. From dispatching and tracking to load planning and route optimization, we have you covered.
                    </p>
                </div>
            </section>

            <section style={{"backgroundColor" : "#e5e5e5" , "borderRadius" : "15px"}} className="section">
                <div className="image">
                    <img src="../Pics/goals.jpeg" alt="Description" />
                </div>
                <div className="text">
                    <h6>And let's not forget</h6>
                    <h1>Why Choose Us</h1>
                    <p>
                    At  Zenith Freight Solutions, we go above and beyond to exceed your expectations. With our unmatched expertise, cutting-edge technology, and commitment to customer satisfaction, we are your trusted partner for all your trucking dispatch needs.
                    </p>
                </div>
            </section>



        </div>
    );
}

export default Home;
