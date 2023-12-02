import CarContainer from "../components/Vehicle/CarContainer";
import Banner from "../ui/Banner";
import Hero from "../ui/Hero";

function Vehcile() {
  return (
    <>
      <Hero header="Vehicle Models" />
      <CarContainer />
      <Banner background="../../public/book-banner.png" />
    </>
  );
}

export default Vehcile;
