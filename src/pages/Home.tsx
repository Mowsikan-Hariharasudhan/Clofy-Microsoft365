import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Users, ArrowRight, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-16 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-60" />
                </div>

                {/* Floating Logos Layer */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        {[
                            { src: '/logos/Microsoft_Word-Logo.wine.png', x: '5%', y: '15%', size: 100, duration: 18, delay: 0 },
                            { src: '/assets/logos/excel.png', x: '88%', y: '12%', size: 120, duration: 22, delay: 2 },
                            { src: '/logos/microsoft-power-automate.png', x: '85%', y: '65%', size: 90, duration: 20, delay: 5 },
                            { src: '/assets/logos/copilot.png', x: '8%', y: '70%', size: 85, duration: 25, delay: 1 },
                            { src: '/assets/logos/teams.jpg', x: '3%', y: '40%', size: 80, duration: 21, delay: 3 },
                            { src: '/assets/logos/todo.jpg', x: '92%', y: '35%', size: 85, duration: 19, delay: 4 },
                            { src: '/assets/logos/outlook.jpg', x: '25%', y: '5%', size: 75, duration: 27, delay: 6 },
                            { src: '/assets/logos/powerpoint.jpg', x: '75%', y: '85%', size: 110, duration: 23, delay: 7 },
                        ].map((logo, i) => (
                            <motion.div
                                key={i}
                                className="absolute pointer-events-auto"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: [0.3, 0.7, 0.3],
                                    scale: [1, 1.15, 1],
                                    y: [0, -50, 0],
                                    x: [0, 25, 0],
                                    rotate: [0, 15, 0]
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.25,
                                    zIndex: 50,
                                    transition: { duration: 0.2 }
                                }}
                                transition={{
                                    duration: logo.duration,
                                    repeat: Infinity,
                                    delay: logo.delay,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    left: logo.x,
                                    top: logo.y,
                                    width: 'clamp(40px, 10vw, ' + logo.size + 'px)',
                                    height: 'auto',
                                }}
                            >
                                <img
                                    src={logo.src}
                                    alt="M365 Product"
                                    className="w-full h-auto drop-shadow-2xl transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Large Central M365 Logo (Subtle) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] lg:w-[800px] h-auto -z-30 pointer-events-none"
                    >
                        <img src="/logos/microsoft-365.png" alt="Microsoft 365" className="w-full h-auto" />
                    </motion.div>
                </div>

                <div className="container-custom text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                            <img src="/logos/microsoft-365.png" alt="M365" className="w-5 h-5" />
                            <span>Enterprise Microsoft 365 Mastery</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Microsoft 365, <br />
                            <span className="text-primary">owned and under control.</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
                            We help growing companies run Microsoft 365 as a
                            secure, governed, and automated platform — not a fragile set of tools.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/assessment">
                                <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all">
                                    Start a Microsoft 365 Assessment
                                </Button>
                            </Link>
                            <div className="text-sm text-muted font-medium">
                                A calm, no-pressure conversation
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Problem Section */}
            <Section className="bg-gray-50/50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">The "Default" Problem</h2>
                        <p className="text-lg text-muted">
                            Most Microsoft 365 environments aren't managed; they are just "on".
                            As you grow, this lack of ownership creates silent risks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-t-4 border-t-red-400">
                            <div className="mb-4 text-red-500 bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Silent Security Drift</h3>
                            <p className="text-muted">
                                Admins add permissions "just for now". Guests get invited and never removed.
                                Security slowly decays without anyone noticing until an audit.
                            </p>
                        </Card>

                        <Card className="border-t-4 border-t-orange-400">
                            <div className="mb-4 text-orange-500 bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center">
                                <LayoutGrid size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sprawl & Confusion</h3>
                            <p className="text-muted">
                                Teams, sites, and data are scattered everywhere.
                                Nobody knows what to keep, what to delete, or who owns what.
                            </p>
                        </Card>

                        <Card className="border-t-4 border-t-blue-400">
                            <div className="mb-4 text-blue-500 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Manual Toil</h3>
                            <p className="text-muted">
                                IT operations rely on memory and manual clicks.
                                Onboarding, offboarding, and changes are slow, error-prone, and inconsistent.
                            </p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Solution / Outcomes */}
            <Section className="overflow-hidden">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                                    We replace "ad-hoc" with <br />
                                    <span className="text-primary">Platform Mastery</span>
                                </h2>
                                <p className="text-lg text-muted mb-10 leading-relaxed max-w-xl">
                                    Stop reacting and start leading. We transform your Microsoft 365 environment into
                                    a high-performance engine that enforces security by design and automates the mundane.
                                </p>
                            </motion.div>

                            <div className="space-y-6">
                                {[
                                    { title: "Security by Design", desc: "Policies enforced by code, removing human error from the equation.", icon: ShieldCheck },
                                    { title: "Identity & Governance", desc: "Scalable access control that adapts as your team grows.", icon: Users },
                                    { title: "Automated Lifecycle", desc: "Zero-touch onboarding and offboarding for your entire suite.", icon: Zap },
                                    { title: "Audit-Ready 24/7", desc: "Always-on compliance that keeps you ready for any inspection.", icon: CheckCircle2 }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors group"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                                            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative mt-20 md:mt-0">
                            {/* Minimalism Logo Orbit visualization */}
                            <div className="relative aspect-square flex items-center justify-center transform scale-75 sm:scale-90 lg:scale-100 origin-center">
                                {/* Decorative Circles */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[80%] h-[80%] border border-dashed border-primary/20 rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[60%] h-[60%] border border-dashed border-accent/20 rounded-full"
                                />

                                {/* Central Node */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", damping: 15, delay: 0.2 }}
                                    className="relative z-10 w-32 h-32 rounded-3xl bg-white shadow-2xl border border-primary/10 flex items-center justify-center p-6"
                                >
                                    <img src="/logos/microsoft-365.png" alt="M365" className="w-full h-auto" />
                                    <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl -z-10 animate-pulse" />
                                </motion.div>

                                {/* Floating Logos - Minimalist Orbit */}
                                {[
                                    { src: '/assets/logos/word.png', delay: 0.1, x: -120, y: -120 },
                                    { src: '/assets/logos/excel.png', delay: 0.2, x: 120, y: -100 },
                                    { src: '/assets/logos/outlook.jpg', delay: 0.3, x: 140, y: 80 },
                                    { src: '/assets/logos/teams.jpg', delay: 0.4, x: -140, y: 40 },
                                    { src: '/assets/logos/copilot.png', delay: 0.5, x: -40, y: -140 },
                                    { src: '/assets/logos/powerpoint.jpg', delay: 0.6, x: 40, y: 150 },
                                    { src: '/assets/logos/todo.jpg', delay: 0.7, x: -80, y: 130 },
                                    { src: '/assets/logos/power-automate.png', delay: 0.8, x: 160, y: -20 },
                                ].map((logo, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: logo.delay, type: "spring" }}
                                        style={{ x: logo.x, y: logo.y }}
                                        className="absolute w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl shadow-lg border border-border p-2 md:p-3 group hover:scale-125 transition-transform cursor-pointer"
                                    >
                                        <img src={logo.src} alt="tool" className="w-full h-full object-contain" />
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="text-center bg-secondary">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-6">Stop guessing your security posture</h2>
                    <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto">
                        Get a clear, honest assessment of your Microsoft 365 environment.
                        Know exactly where you stand and what needs to change.
                    </p>
                    <Link to="/assessment">
                        <Button size="lg" className="h-14 px-8 text-lg">
                            Book an Assessment <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}
