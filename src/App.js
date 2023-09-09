import Features from './Features/Features';
import Header from './Header/Header'
import Hero from './Hero/Hero';










function App() {
  return (
    <div className="home">
      <Header />
      <main className='mt-5'>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;
