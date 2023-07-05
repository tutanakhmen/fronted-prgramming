import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Indonesian from "../components/Indonesian/GlobalCard"
import Provinsi from "../components/Provinces";
import AddCovidForm from "../components/AddCovidForm";
import Footer from "../components/Footer";

function Main() {
  return (
    <main>
      <Hero />
      <Indonesian />
      <Provinsi />
      <AddCovidForm />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
