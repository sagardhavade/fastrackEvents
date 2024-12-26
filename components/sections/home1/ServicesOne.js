// "use client"; // Ensures the component runs on the client side

// import Link from "next/link";
// import { useState } from "react";

// export default function ServicesOne() {
//   // State for dynamic data (e.g., dynamic images, text, links)
//   const [servicesContent, setServicesContent] = useState({
//     sectionTagline: "event benefits",
//     sectionTitle: "Why Choose Us?",
//     services: [
//       {
//         id: 1,
//         title: "Expertise You Can Trust",
//         description: "With over a decade of experience, our team has mastered the art of creating impactful events.",
//         icon: "icon-camera",
//         link: "/event-prodigy",
//       },
//       {
//         id: 2,
//         title: "Tailored Solutions",
//         description: "We customize every event to suit your unique needs and vision.",
//         icon: "icon-skewer",
//         link: "/stellar-events-co",
//       },
//       {
//         id: 3,
//         title: "Comprehensive Services",
//         description: " From concept to execution, we handle every detail with precision.",
//         icon: "icon-dinner-table",
//         link: "/elite-event-management",
//       },
//       {
//         id: 4,
//         title: "Memorable Experiences",
//         description: "We focus on creating moments that resonate and linger.",
//         icon: "icon-dinner-table",
//         link: "/elite-event-management",
//       },
//     ],
//   });

//   return (
//     <>
//       {/* Services One Start */}
//       <section className="services-one">
//         <div className="container">
//           <div className="section-title text-center">
//             <div className="section-title__tagline-box">
//               {/* <span className="section-title__tagline">{servicesContent.sectionTagline}</span> */}
//             </div>
//             <h2 className="section-title__title">{servicesContent.sectionTitle}</h2>
//           </div>
//           <div className="row">
//             {servicesContent.services.map((service) => (
//               <div key={service.id} className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="100ms">
//                 <div className="services-one__single">
//                   <div className="services-one__icon">
//                     <span className={service.icon}></span>
//                   </div>
//                   <h3 className="services-one__title">
//                     <Link href={service.link}>{service.title}</Link>
//                   </h3>
//                   <p className="services-one__text">{service.description}</p>
//                   {/* <Link href={service.link} className="services-one__read-more">
//                     Read More <span className="icon-arrow-right"></span>
//                   </Link> */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Services One End */}
//     </>
//   );
// }



"use client";

import Link from "next/link";

export default function ServicesOne({ servicesContent }) {
  return (
    <section className="services-one">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="section-title__title">{servicesContent.sectionTitle}</h2>
        </div>
        <div className="row">
          {servicesContent.services.map((service) => (
            <div key={service.id} className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
              <div className="services-one__single">
                <div className="services-one__icon">
                  <span className={service.icon}></span>
                </div>
                <h3 className="services-one__title">
                  <Link href={service.link}>{service.title}</Link>
                </h3>
                <p className="services-one__text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
