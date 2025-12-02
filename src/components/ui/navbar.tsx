"use client" 
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/about", label: "About" },
  ]

  return (
    <>
      {/* Blur gradient overlay - sits below navbar */}
      <div className="navbar-blur-gradient" />

      <div className="fixed top-0 left-0 right-0 flex justify-center w-full py-6 px-4 z-50 pointer-events-none">
        <div className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-md w-full max-w-5xl relative pointer-events-auto">
        <NavLink to="/" className="flex items-center">
          <motion.div
            className="w-10 h-10 flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Coastal Anchor Icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="5" r="2" stroke="#0F2742" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 7V21" stroke="#0F2742" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12" stroke="#BFE6DA" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M5 12H8" stroke="#0F2742" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 12H19" stroke="#0F2742" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors font-medium ${
                  isActive
                    ? "text-navy"
                    : "text-navy/60 hover:text-navy"
                }`
              }
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.div>
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-navy rounded-full hover:bg-navy/90 transition-colors"
          >
            Get Started
          </NavLink>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden flex items-center" 
          onClick={toggleMenu} 
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-navy" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-navy" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <NavLink 
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `text-base font-medium ${
                        isActive ? "text-navy" : "text-navy/70"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-navy rounded-full hover:bg-navy/90 transition-colors"
                  onClick={toggleMenu}
                >
                  Get Started
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  )
}

export { Navbar }
