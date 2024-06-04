import React from 'react';

const servicesData = [
  {
    title: '✓ Negotiate for Optimal Payment Rates',
    description: 'We work tirelessly to secure the best payment rates for your services, ensuring you get the compensation you deserve.'
  },
  {
    title: '✓ Streamlined Broker Setup Packets',
    description: 'Leave the paperwork to us! We efficiently manage and organize your broker setup packets, saving you time and hassle.'
  },
  {
    title: '✓ Seamless Broker Connections',
    description: 'We establish strong connections with reliable brokers, expanding your network and maximizing your opportunities.'
  },
  {
    title: '✓ Optimal Truck Dispatch Services',
    description: 'Our team of experts provides top-notch dispatch services, ensuring your trucks are always on the move and efficiently managed.'
  },
  {
    title: '✓ Dedicated Dispatchers',
    description: 'Rest assured that your business is in good hands. Our dedicated dispatchers are committed to your success.'
  },
  {
    title: '✓ Select Your Preferred Service Regions',
    description: "Choose the regions you want to operate in, and we'll strategize to make the most of your chosen areas."
  }
];

const ServiceList = () => {
  return (
    <div style={{
        "padding" : "5%"
    }} className="services">
      <h2>Our Services</h2>
        {servicesData.map((service, index) => (
          <div key={index}>
            {/* <span className="tick" role="img" aria-label="check">✓</span> */}
            <div className="service-content">
              <h3 style={{"color" : "rgb(46, 153, 77)"}}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ServiceList;
