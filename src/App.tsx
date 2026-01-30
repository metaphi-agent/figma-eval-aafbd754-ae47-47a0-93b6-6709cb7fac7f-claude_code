import Header from './components/blocks/Header';
import Hero from './components/blocks/Hero';
import Brands from './components/blocks/Brands';
import NewArrivals from './components/blocks/NewArrivals';
import PaydaySale from './components/blocks/PaydaySale';
import YoungsFavourite from './components/blocks/YoungsFavourite';
import DownloadApp from './components/blocks/DownloadApp';
import Newsletter from './components/blocks/Newsletter';
import Footer from './components/blocks/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Brands />
      <NewArrivals />
      <PaydaySale />
      <YoungsFavourite />
      <DownloadApp />
      <Newsletter />
      <Footer />
    </div>
  );
}
