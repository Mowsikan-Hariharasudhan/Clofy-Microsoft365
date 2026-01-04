import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const navLinks = [
    { name: 'Microsoft 365 Management', path: '/management' },
    { name: 'Security & AI', path: '/security' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className={`container-custom flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'}`}>
                <Link to="/" className="flex items-center gap-3 z-50 group">
                    <img
                        src="/assets/logo_mark.png"
                        alt="Clofy"
                        className={`transition-all duration-300 object-contain ${isScrolled ? 'h-10' : 'h-14'}`}
                    />
                    <span className={`font-bold tracking-tight text-foreground transition-all duration-300 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
                        Clofy
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-sm font-medium text-muted hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/assessment">
                        <Button size="sm">Book an Assessment</Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-muted"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-border overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-base font-medium text-foreground py-2 border-b border-gray-100"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/assessment" className="mt-4">
                                <Button className="w-full">Book an Assessment</Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
