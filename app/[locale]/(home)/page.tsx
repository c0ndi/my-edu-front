import Hero from './components/hero'
import About from './components/about'
import App from './components/app'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const translation = await import(`../../locales/${params.locale}/translation.json`)

  const { title, description } = translation.seo

  return {
    title: title,
    description: description,
    openGraph: {
      images: [`https://my-edu.vercel.app/images/locales/${params.locale}/og.png`],
    },
  }
}

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

Home.theme = "dark";