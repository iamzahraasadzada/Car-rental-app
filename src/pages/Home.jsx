import Banner from "../components/Home/Banner";
import BookCar from "../components/Home/BookCar";
import ChooseUs from "../components/Home/ChooseUs";
import Download from "../components/Home/Download";
import Faq from "../components/Home/Faq";
import Hero from "../components/Home/Hero";
import PickCar from "../components/Home/PickCar";
import PlanTrip from "../ui/PlanTrip";
import Testimonials from "../components/Home/Testimonials ";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
    </>
  );
}

export default Home;
