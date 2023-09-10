import Features from './Features/Features';
import Header from './Header/Header'
import Hero from './Hero/Hero';
import Quote from './Quote/Quote';
import Services from './Services/Services';










function App() {
  return (
    <div className="home">
      <Header />
      <main className='mt-5'>
        <Hero />
        <Features />
        <Quote />
        <Services />
      </main>
    </div>
  );
}

export default App;
