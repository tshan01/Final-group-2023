import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (

    

    <div>
      {/* Assign IDs for internal navigation */}
      <div id="Home">
        <Hero />
      </div>
      <br /><br />
      <br/>

      <div id="Cards">
        <Cards />
      </div>
      <br /><br />

      <div id="AboutUs">
        <AboutUs />
      </div>
    </div>
  );
}
