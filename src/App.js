import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, CheckCircle, Star, Shield, Sparkles, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import CeramicCoating from './components/CeramicCoating';
import SizingGuide from './components/SizingGuide';
import QuoteForm from './components/QuoteForm';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {!isAdmin ? (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <CeramicCoating />
            <Pricing />
            <SizingGuide />
            <QuoteForm />
            <Reviews />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <AdminPanel onLogout={() => setIsAdmin(false)} />
      )}
      
      {/* Admin toggle - hidden in production */}
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full text-xs opacity-50 hover:opacity-100 transition-opacity"
        style={{ display: 'none' }} // Hidden in production
      >
        Admin
      </button>
    </div>
  );
}

export default App;
