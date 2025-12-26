import Carousel from "@/components/Carousel";
import AboutUs from "@/app/about-us/AboutUs";
import { COMPANY_NAME, COMPANY_SHORTNAME } from "@/lib/constants";

export default function HomePage() {
  const carouselSlides = [
    {
      image: "/images/iscita-slide1.jpg",
      title: "ISCIT2023",
      description: "International Symposium on Communications and Information Technology",
    },
    {
      image: "/images/iscita-slide2.jpg",
      title: "Conference Venue",
      description: "Join us at our state-of-the-art venue",
    },
    {
      image: "/images/iscita-slide3.jpg",
      title: "Conference Lunch",
      description: "Network with peers during our catered events",
    },
    {
      image: "/images/iscita-slide4.jpg",
      title: "Conference Tour",
      description: "Explore the surrounding area and local attractions",
    },
    {
      image: "/images/iscita-slide5.jpg",
      title: "Conference Presentations",
      description: "Share your research with the international community",
    },
    {
      image: "/images/iscita-slide6.jpg",
      title: "Networking Events",
      description: "Connect with leading researchers and industry professionals",
    },
  ];

  return (
    <main className="main-page">
      <h1 className="page-title">Welcome to {COMPANY_NAME}</h1>
      <section className="section-content">
        <p className="text-lg md:text-xl">
          <b>
            {COMPANY_NAME} ({COMPANY_SHORTNAME}){" "}
          </b>{" "}
          is a financial and contracting entity for international Engineering and Science
          conferences in Australia.
        </p>

        <div className="rounded-xl overflow-hidden">
          <Carousel slides={carouselSlides} autoPlayInterval={5000} />
        </div>
      </section>

      <h2 className="text-center text-2xl md:text-5xl font-bold pt-2 md:pt-5">About Us</h2>
      <AboutUs />
    </main>
  );
}
