import Card from "../components/Card";
import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Main() {
  return <main></main>;
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hello />
      <Main />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
