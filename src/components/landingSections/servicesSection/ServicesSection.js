import ArrowRight from "../../../assets/images/arrow-right-long.png";
import Button from "../../button/Button";
import "./ServicesSection.css";
import React from "react";
import ServicesImg1 from "../../../assets/images/services-img/services-img-1.png";
import ServicesImg2 from "../../../assets/images/services-img/services-img-2.png";
import ServicesImg3 from "../../../assets/images/services-img/services-img-3.png";
import ServicesImg4 from "../../../assets/images/services-img/services-img-4.png";

const ServicesSection = () => {
  const services = [
    {
      title: "SIMULATION",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      image: ServicesImg1,
    },
    {
      title: "EDUCATION",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      image: ServicesImg2,
    },
    {
      title: "SELF-CARE",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      image: ServicesImg3,
    },
    {
      title: "OUTDOOR",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      image: ServicesImg4,
    },
  ];

  return (
    <div>
      <div className="services-section-1">
        <div className="services-container">
          <div className="services-title-container">
            <p className="services-big-title">WHY BUILD</p>
            <div className="services-arrow-section">
              <p className="services-small-header">WITH HYDRA?</p>
              <img
                src={ArrowRight}
                alt="services-picture"
                className="services-picture"
              />
            </div>
          </div>
          <p className="services-text">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div className="services-section-2">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image-placeholder">
              <img src={service.image} alt={service.title}/>
            </div>
            <h3 className="service-title">{service.title}</h3>
          <div className="div-for-line"></div>

            <p className="service-description">{service.description}</p>
            <Button className="service-button">TRY IT NOW</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
