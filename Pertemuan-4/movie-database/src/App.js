import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hello nama = "Hasan" orang= "Orang Depok"/>
      <Hello nama = "Yoimiya" orang= "Orang Inazuma"/>
      <Hello nama = "Hasan" orang= "Orang Bogor"/>
      <Footer />
    </div>
  );
}

export default App;
