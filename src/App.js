import Features from './Features/Features';
import Header from './Header/Header'
import Hero from './Hero/Hero';
import FirstTask from './FirstTask/FirstTask';
import Services from './Services/Services';
import SecondTask from './SecondTask/SecondTask';
import Footer from './Footer.jsx/Footer';










function App() {
  return (
    <div className="home">
      <Header />
      <main className='mt-5'>
        <Hero />
        <Features />
        <FirstTask />
        <Services />
        <SecondTask />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
