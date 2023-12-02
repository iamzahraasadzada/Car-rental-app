import Hero from "../ui/Hero";
import AboutMain from "../components/About/AboutMain";
import PlanTrip from "../ui/PlanTrip";
import Banner from "../ui/Banner";

function About() {
  return (
    <>
      <Hero header="About" />
      <AboutMain />
      <PlanTrip />
      <Banner background="../../public/book-banner.png" />
    </>
  );
}

export default About;
