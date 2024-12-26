import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  const servicesData = [
    {
      id: 1,
      title: "Corporate Events and Conferences",
      description:
        "Elevate your business engagements with flawlessly executed corporate events and conferences tailored to meet your objectives.",
      link: "event-prodigy",
      icon: "icon-camera",
      wowDelay: "100ms",
    },
    {
      id: 2,
      title: "High-Profile Parties and Celebrations",
      description:
        "From intimate gatherings to lavish galas, we craft celebrations that leave lasting impressions.",
      link: "stellar-events-co",
      icon: "icon-skewer",
      wowDelay: "200ms",
    },
    {
      id: 3,
      title: "Celebrity Events and Public Appearances",
      description:
        "Seamlessly managing celebrity engagements, ensuring every detail shines under the spotlight.",
      link: "elite-event-management",
      icon: "icon-dinner-table",
      wowDelay: "300ms",
    },
    {
      id: 4,
      title: "Concerts and Fashion Shows",
      description:
        "Breathtaking stages, flawless production, and unforgettable performances define our approach.",
      link: "infinite-occasions",
      icon: "icon-cake",
      wowDelay: "400ms",
    },
    {
      id: 5,
      title: "Festive Events",
      description:
        "Capture the essence of tradition and celebration with our vibrant festive event solutions.",
      link: "dream-event-planners",
      icon: "icon-dental-specialists",
      wowDelay: "500ms",
    },
    {
      id: 6,
      title: "Product Launches",
      description:
        "Unveil your products with impact, ensuring your brand’s first impression is unforgettable.",
      link: "event-prodigy",
      icon: "icon-modern-cos",
      wowDelay: "600ms",
    },
    {
      id: 7,
      title: "Merchandising and Promotions",
      description:
        "Drive brand engagement with innovative merchandising and promotional strategies.",
      link: "event-prodigy",
      icon: "icon-modern-cos",
      wowDelay: "600ms",
    },
    {
      id: 8,
      title: "Expos and Exhibitions",
      description:
        "Create standout exhibition spaces that captivate audiences and drive connections.",
      link: "event-prodigy",
      icon: "icon-modern-cos",
      wowDelay: "600ms",
    },
    {
      id: 9,
      title: "Road Shows and Brand-Building Events",
      description:
        "Take your brand on the road with impactful, interactive experiences.",
      link: "event-prodigy",
      icon: "icon-modern-cos",
      wowDelay: "600ms",
    },
    {
      id: 7,
      title: "Sports Events",
      description:
        "From tournaments to sports promotions, we bring energy and precision to the field.",
      link: "event-prodigy",
      icon: "icon-modern-cos",
      wowDelay: "600ms",
    },
  ];

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Services">
        <div>
          {/*Services Page Start*/}
          <section className="services-page">
            <div className="container">
              <div className="row">
                {servicesData.map((service) => (
                  <div
                    key={service.id}
                    className={`col-xl-4 col-lg-4 col-md-6 wow fadeInLeft`}
                    data-wow-delay={service.wowDelay}
                  >
                    <div className="services-one__single">
                      <div className="services-one__icon">
                        <span className={service.icon}></span>
                      </div>
                      <h3 className="services-one__title">
                        {/* <Link href={service.link}>{service.title}</Link> */}
                        {service.title}

                      </h3>
                      <p className="services-one__text">
                        {service.description}
                      </p>
                      {/* <Link
                        href={service.link}
                        className="services-one__read-more"
                      >
                        Read More <span className="icon-arrow-right"></span>
                      </Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/*Services Page End*/}

          {/*CTA One Start*/}
          <section className="cta-one">
            <div className="container">
              <div className="cta-one__inner">
                <h3 className="cta-one__title">
                  Get Latest Updates Subscribe <br /> to Our Newsletter
                </h3>
                <form
                  className="cta-one__form mc-form"
                  data-url="MC_FORM_URL"
                  noValidate
                >
                  <div className="cta-one__form-input-box">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="EMAIL"
                    />
                    <button type="submit" className="cta-one__btn">
                      <span className="icon-paper-plan"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/*CTA One End*/}
        </div>
      </Layout>
    </>
  );
}
