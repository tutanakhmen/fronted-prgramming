import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Movies from "../components/Movies/Movies";

function Main() {
  return (
    <main>
      <Hero />
      <Movies />
      <Card />
    </main>
  );
}
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
