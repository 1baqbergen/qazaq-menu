import { Hero } from './components/Hero';
import { RestaurantIntro } from './components/RestaurantIntro';
import { MenuView } from './components/MenuView';
import { RestaurantInfo } from './components/RestaurantInfo';
import { QRSection } from './components/QRSection';
import { Footer } from './components/Footer';

function App() {
  const handleViewMenu = () => {
    const menuSection = document.querySelector('#menu-section');
    if (menuSection) {
      const navHeight = 64;
      const offset = menuSection.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Hero onViewMenu={handleViewMenu} />
      <RestaurantIntro />
      <div id="menu-section">
        <MenuView />
      </div>
      <RestaurantInfo />
      <QRSection />
      <Footer />
    </main>
  );
}

export default App;