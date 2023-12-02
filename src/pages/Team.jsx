import TeamBox from "../components/Team/TeamBox";
import Banner from "../ui/Banner";
import Hero from "../ui/Hero";

function Team() {
  return (
    <>
      <Hero header="Our Team" />
      <TeamBox />
      <Banner background="../../public/book-banner.png" />
    </>
  );
}

export default Team;
