import { Outlet } from 'react-router-dom';
import { Navbar } from './components/ui/navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sand">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
