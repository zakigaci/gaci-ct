import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Hours from '@/components/Hours';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Hours />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
