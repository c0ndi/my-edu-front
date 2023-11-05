import Hero from './components/hero'
import About from './components/about'
import App from './components/app'
import Footer from './components/footer'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main>
      <div className='bg-[#fff]'>
        <Navbar />
      </div>
      <div className='bg-[#fcfcfc]'>
        <Hero />
      </div>
      <div className='bg-[#131313]'>
        <About />
        <App />
        <Footer />
      </div>
    </main >
  )
}