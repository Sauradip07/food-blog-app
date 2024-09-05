
import './App.css';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Footer } from './components/Footer';
function App() {
  

  return (
    <div className='text-azureBlue font-open mx-auto'>
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default App
