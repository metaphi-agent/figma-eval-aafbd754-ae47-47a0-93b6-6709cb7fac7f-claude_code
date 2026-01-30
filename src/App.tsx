import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import NewArrivalsSection from './components/NewArrivalsSection';
import PaydayBanner from './components/PaydayBanner';
import YoungsFavouriteSection from './components/YoungsFavouriteSection';
import AppDownloadSection from './components/AppDownloadSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <NewArrivalsSection />
        <PaydayBanner />
        <YoungsFavouriteSection />
        <AppDownloadSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}