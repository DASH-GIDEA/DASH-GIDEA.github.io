import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isOverlappingContact, setIsOverlappingContact] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isDemoPage = location.pathname === '/demo';
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if ((isHomePage || isDemoPage) && hero) {
        const rect = hero.getBoundingClientRect();
        setIsScrolledPastHero(rect.bottom <= 64);
      }

      if (isContactPage && contactRef?.current && windowWidth < 768) {
        const rect = contactRef.current.getBoundingClientRect();
        setIsOverlappingContact(rect.top <= 64); // 64px is navbar height
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname, contactRef, isHomePage, isDemoPage, isContactPage, windowWidth]);

  // Determine navbar style
  let finalStyle = 'bg-white text-black';
  if ((isHomePage || isDemoPage) && !isScrolledPastHero) {
    finalStyle = 'bg-transparent text-white';
  } else if (isContactPage && !isOverlappingContact) {
    finalStyle = 'bg-transparent text-black';
  }

  const hasShadow = finalStyle === 'bg-white text-black' && !isContactPage;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all ${
        hasShadow ? 'shadow' : ''
      } ${finalStyle}`}
    >
      <Link to="/" className="text-xl font-bold">DASH-GIDEA</Link>

      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/demo" className="hover:underline">Demo</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>

      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full px-6 py-4 flex flex-col space-y-4 md:hidden transition z-40 bg-white text-black shadow`}
        >
          <Link to="/demo" className="hover:underline" onClick={() => setMenuOpen(false)}>Demo</Link>
          <Link to="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
