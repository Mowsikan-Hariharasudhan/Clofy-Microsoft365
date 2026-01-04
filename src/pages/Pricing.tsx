import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Clock, Shield, Zap, Database, Check } from 'lucide-react';

export default function Pricing() {
    return (
        <>
            <section className="pt-32 pb-20 bg-background text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
                        Predictable pricing for predictable outcomes.
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        You are not buying hours, tickets, or effort.
                        You are investing in a Microsoft 365 platform that stays secure, governed, and ready as you grow.
                    </p>
                    <Link to="/assessment">
                        <Button size="lg" className="h-14 px-8 text-lg">Start with an Assessment</Button>
                    </Link>
                </div>
            </section>

            <Section className="bg-gray-50/50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Why we don’t price by the hour</h2>
                        <p className="text-lg text-muted">
                            Hourly pricing rewards activity. It does not reward good design or automation.
                            Our goal is to reduce manual work and prevent recurring issues.
                            That only works when incentives are aligned.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <Card className="bg-white border-l-4 border-l-red-400">
                            <div className="flex items-center gap-3 mb-4 text-red-500">
                                <Clock size={24} />
                                <h3 className="text-xl font-bold">Hourly Support Model</h3>
                            </div>
                            <ul className="space-y-3 text-muted">
                                <li className="flex gap-2"><span className="text-red-400">×</span> Incentivises more time spent on fixes</li>
                                <li className="flex gap-2"><span className="text-red-400">×</span> Profits from recurring problems</li>
                                <li className="flex gap-2"><span className="text-red-400">×</span> Unpredictable monthly costs</li>
                                <li className="flex gap-2"><span className="text-red-400">×</span> Reactive "break-fix" mentality</li>
                            </ul>
                        </Card>

                        <Card className="bg-white border-l-4 border-l-green-500 shadow-md">
                            <div className="flex items-center gap-3 mb-4 text-green-600">
                                <Shield size={24} />
                                <h3 className="text-xl font-bold">Outcome-Based Retainer</h3>
                            </div>
                            <ul className="space-y-3 text-muted">
                                <li className="flex gap-2"><Check className="text-green-500 w-5" /> Incentivises stability and automation</li>
                                <li className="flex gap-2"><Check className="text-green-500 w-5" /> Profits from preventing problems</li>
                                <li className="flex gap-2"><Check className="text-green-500 w-5" /> Predictable, flat monthly investment</li>
                                <li className="flex gap-2"><Check className="text-green-500 w-5" /> Proactive governance and improvement</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center">What influences the engagement level</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <Database className="text-primary mb-4" size={32} />
                            <h3 className="text-lg font-bold mb-2">Tenant complexity</h3>
                            <p className="text-sm text-muted">Size, structure, number of users, and existing configuration.</p>
                        </Card>
                        <Card>
                            <Shield className="text-primary mb-4" size={32} />
                            <h3 className="text-lg font-bold mb-2">Security Needs</h3>
                            <p className="text-sm text-muted">Regulatory requirements, audit expectations, and risk tolerance.</p>
                        </Card>
                        <Card>
                            <Zap className="text-primary mb-4" size={32} />
                            <h3 className="text-lg font-bold mb-2">Automation Maturity</h3>
                            <p className="text-sm text-muted">How much is already automated, and what needs to be built next.</p>
                        </Card>
                        <Card>
                            <div className="text-base font-bold text-primary border border-primary rounded w-8 h-8 flex items-center justify-center mb-4">AI</div>
                            <h3 className="text-lg font-bold mb-2">AI Readiness</h3>
                            <p className="text-sm text-muted">Data exposure, permission hygiene, and Copilot rollout plans.</p>
                        </Card>
                    </div>
                </div>
            </Section>

            <Section className="bg-primary/5">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What is always included</h2>
                            <ul className="space-y-4">
                                {[
                                    "Clear ownership of Microsoft 365 outcomes",
                                    "Automation-first operating model",
                                    "Structured change and exception handling",
                                    "SLA-backed support for requests and incidents",
                                    "Ongoing advice as your business evolves"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-lg text-muted">
                                        <Check className="text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 italic text-muted border-l-4 border-primary pl-4">
                                "Support exists to protect the platform — not to define the relationship."
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6">What this is not</h2>
                            <ul className="space-y-4">
                                {[
                                    "Break-fix or ad-hoc IT support",
                                    "Hourly billing or ticket-count pricing",
                                    "General IT or end-user helpdesk services",
                                    "Short-term or one-off engagements"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-lg text-muted">
                                        <span className="text-red-400 font-bold">×</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-6">Start with clarity, not a quote</h2>
                    <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
                        We begin every engagement with an assessment. It defines scope, priorities, and the right engagement level.
                        You’ll know exactly what you’re investing in — before any long-term decision is made.
                    </p>
                    <Link to="/assessment">
                        <Button size="lg" className="h-14 px-8 text-lg">Book an Assessment</Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}
