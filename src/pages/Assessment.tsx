import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Check, Mail, Building, User, HelpCircle } from 'lucide-react';

export default function Assessment() {
    return (
        <>
            <section className="pt-32 pb-20 bg-background text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">Start with clarity.</h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
                        The assessment is a calm, structured conversation about
                        how your Microsoft 365 environment actually works today.
                    </p>
                    <p className="text-lg text-primary/80 font-medium">
                        There is no sales pitch. If we’re not a good fit, we’ll tell you.
                    </p>
                </div>
            </section>

            <Section className="bg-gray-50/50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Left Content */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">What this assessment covers</h2>
                                <ul className="space-y-3">
                                    {[
                                        "Security and identity posture",
                                        "Governance and access clarity",
                                        "Data exposure and AI readiness",
                                        "Automation and operational gaps",
                                        "License usage and cost visibility"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-muted">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                                <h3 className="font-bold mb-4">Who should book this</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-sm text-muted">
                                        <Check className="text-green-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                                        Founders scaling beyond ad-hoc IT decisions
                                    </li>
                                    <li className="flex gap-3 text-sm text-muted">
                                        <Check className="text-green-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                                        CTOs concerned about security, audits, or AI exposure
                                    </li>
                                    <li className="flex gap-3 text-sm text-muted">
                                        <Check className="text-green-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                                        COOs who want predictable systems, not constant fixes
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold mb-4">What this is not</h2>
                                <div className="flex flex-wrap gap-2">
                                    {["Not a generic sales demo", "Not a checklist PDF", "Not a pressure-driven consultation"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <Card className="bg-white p-8 md:p-10 shadow-lg border-primary/10">
                            <h2 className="text-2xl font-bold mb-2">Request an assessment</h2>
                            <p className="text-muted mb-8 text-sm">
                                Share a little context below. We’ll get back to you to schedule a conversation.
                            </p>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground">Your name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-muted/50" size={18} />
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Jane Doe"
                                            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium mb-1.5 text-foreground">Company</label>
                                    <div className="relative">
                                        <Building className="absolute left-3 top-3 text-muted/50" size={18} />
                                        <input
                                            type="text"
                                            id="company"
                                            placeholder="Your company name"
                                            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground">Work email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-muted/50" size={18} />
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="you@company.com"
                                            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground">What prompted you to reach out?</label>
                                    <div className="relative">
                                        <HelpCircle className="absolute left-3 top-3 text-muted/50" size={18} />
                                        <textarea
                                            id="message"
                                            placeholder="Security concerns, AI readiness, cost clarity, growth..."
                                            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[120px] resize-y"
                                        ></textarea>
                                    </div>
                                </div>

                                <Button type="submit" size="lg" className="w-full text-base">Request Assessment</Button>

                                <p className="text-xs text-center text-muted mt-4">
                                    We respond personally. Your information stays private.
                                </p>
                            </form>
                        </Card>
                    </div>
                </div>
            </Section>
        </>
    );
}
