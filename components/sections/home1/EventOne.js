"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import Link from "next/link";
import ServicesOne from "./ServicesOne";
import { servicesContent1 } from "./servicesContent";

export default function EventOne() {
  // State for dynamic content
  const [eventContent, setEventContent] = useState({
    sectionTagline: "About Us",
    sectionTitle: "Welcome to Fastrack Group, your trusted partner in crafting extraordinary events. Since our inception in 2009, we have been at the forefront of the event management industry, delivering unparalleled experiences for clients across India. Founded by the visionary Mr. Sachin Kaul, Fastrack Group has established itself as a name synonymous with reliability, innovation, and excellence.",
    sectionTitle1: "At Fastrack, we go beyond traditional event management. We believe in creating unforgettable memories, whether it’s a milestone celebration, a high-profile corporate event, or a spectacular concert. Our approach is simple yet profound – understand your needs, design with precision, and execute with passion. As your event partner and consultant, we are dedicated to turning your vision into a reality.",
    buttonText: "Join The Event",
    buttonLink: "/event-details",    
    points: [
      {
        id: 1,
        iconClass: "icon-air-horn",
        title: "Mission",
        description:
          "To deliver exceptional, tailor-made events that inspire, connect, and create lasting memories, while exceeding client expectations through innovation and dedication.",
        link: "/event",
      },
      {
        id: 2,
        iconClass: "icon-party-blower",
        title: "Vision",
        description:
          "To be recognized as a global leader in event management, setting benchmarks in creativity, precision, and excellence, and building meaningful connections through unforgettable experiences.",
        link: "/event",
      },
    ],
    eventImage: "/assets/images/resources/event-one-img-1.jpg",
  });

  
  return (
    <>
      {/* Event One Start */}
      <section className="event-one">
        <div className="container">
          <div
            className="event-one__inner wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="event-one__top">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    {eventContent.sectionTagline}
                  </span>
                </div>
                {/* <h2 className="section-title__title">
                  {eventContent.sectionTitle}
                </h2> */}
                <p className="content">
                  {eventContent.sectionTitle}
                  
                </p>
                <p>
                {eventContent.sectionTitle1}
                </p>
              </div>
              {/* <div className="event-one__btn-box">
                <Link href={eventContent.buttonLink} className="event-one__btn thm-btn">
                  {eventContent.buttonText}
                  <span className="icon-arrow-right"></span>
                </Link>
              </div> */}
            </div>

            <ul className="list-unstyled event-one__points">
              {eventContent.points.map((point) => (
                <li key={point.id}>
                  <div className="icon">
                    <span className={point.iconClass}></span>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href={point.link}>{point.title}</Link>
                    </h4>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ServicesOne servicesContent={servicesContent1} />
            <div className="event-one__img-box">
              <img src={eventContent.eventImage} alt="Event" />
            </div>
          </div>
        </div>
      </section>
      {/* Event One End */}
    </>
  );
}
