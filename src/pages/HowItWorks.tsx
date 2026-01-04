import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Network, ShieldCheck, Cog, Monitor, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-background overflow-hidden relative">
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl tracking-tight text-foreground">
                        A system that runs Microsoft 365 — not people reacting to it.
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mb-8 leading-relaxed">
                        Most Microsoft 365 environments rely on individual knowledge.
                        Someone remembers how access works. Someone knows what to check.
                        <br /><br />
                        We replace that dependency with a control plane — a system that defines rules, enforces them automatically, and produces consistent outcomes.
                    </p>
                    <Link to="/assessment">
                        <Button size="lg" className="h-14 px-8 text-lg">
                            Start a Microsoft 365 Assessment
                        </Button>
                    </Link>
                </div>
                {/* Soft gradient background effect */}
                <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
            </section>

            {/* Control Plane */}
            <Section className="bg-gray-50/50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Microsoft 365 control plane</h2>
                            <p className="text-lg text-muted mb-6">
                                The control plane is how Microsoft 365 decisions are made, enforced, and reviewed.
                                Instead of relying on memory or manual steps, the control plane ensures the platform behaves the same way every day.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Security rules are defined once and enforced continuously",
                                    "Access follows policy, not preference",
                                    "Changes are logged, reviewed, and traceable",
                                    "Exceptions are explicit and time-bound"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-muted">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visual Representation (Abstract Control Plane) */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl blur-xl" />
                            <div className="relative bg-white border border-border p-8 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-4 mb-6 border-b border-border pb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Monitor size={20} />
                                    </div>
                                    <div>
                                        <div className="font-semibold">M365 Control Center</div>
                                        <div className="text-xs text-muted">System Status: Healthy</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { label: 'Identity Policy', status: 'Enforced', color: 'text-green-600 bg-green-50' },
                                        { label: 'Data Retention', status: 'Active', color: 'text-blue-600 bg-blue-50' },
                                        { label: 'External Access', status: 'Restricted', color: 'text-orange-600 bg-orange-50' },
                                        { label: 'Audit Logging', status: 'Recording', color: 'text-purple-600 bg-purple-50' },
                                    ].map((row, j) => (
                                        <div key={j} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-border/50">
                                            <span className="text-sm font-medium text-muted">{row.label}</span>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${row.color}`}>{row.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Policy as Code */}
            <Section>
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Policy, enforced as code</h2>
                        <p className="text-lg text-muted">
                            Policies only work if they are applied automatically. We translate security, governance, and compliance requirements into system-enforced rules.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center">
                            <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="font-bold mb-2">Identity & Access</h3>
                            <p className="text-sm text-muted">Automated access reviews and conditional access policies.</p>
                        </Card>
                        <Card className="text-center">
                            <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                                <Network size={24} />
                            </div>
                            <h3 className="font-bold mb-2">Data Sharing</h3>
                            <p className="text-sm text-muted">Retention rules and external sharing boundaries defined.</p>
                        </Card>
                        <Card className="text-center">
                            <div className="w-12 h-12 mx-auto bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <Cog size={24} />
                            </div>
                            <h3 className="font-bold mb-2">Admin Privilege</h3>
                            <p className="text-sm text-muted">Just-in-time access and role boundaries.</p>
                        </Card>
                        <Card className="text-center">
                            <div className="w-12 h-12 mx-auto bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="font-bold mb-2">AI Guardrails</h3>
                            <p className="text-sm text-muted">Safe enablement of Copilot and data protection.</p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Automation First */}
            <Section className="bg-primary/5">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center">Automation first, humans when needed</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="relative overflow-hidden border-primary/20 bg-white/80 backdrop-blur-sm">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Cog className="text-primary animate-spin-slow" size={20} />
                                Automated by default
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "User joiner, mover, and leaver processes",
                                    "Role-based access assignment",
                                    "License allocation and cleanup",
                                    "Routine governance enforcement"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-muted">
                                        <span className="text-primary font-bold">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="relative overflow-hidden border-border bg-white/50">
                            <div className="absolute top-0 left-0 w-1 h-full bg-muted" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-muted" size={20} />
                                Human review for exceptions
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Non-standard access requests",
                                    "Custom application needs",
                                    "Policy exceptions with business context",
                                    "Complex security decisions"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-muted">
                                        <span className="text-muted font-bold">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Operating Flow */}
            <Section>
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center">The operating flow</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            { step: "Assess", title: "Establish the baseline", content: "We establish a clear baseline of security, access, data, and automation maturity." },
                            { step: "Standardise", title: "Apply foundations", content: "Core security and governance foundations are applied to bring consistency." },
                            { step: "Automate", title: "System takes over", content: "Repeatable processes are handled by the system to reduce manual toil." },
                            { step: "Monitor", title: "Continuous review", content: "Changes, drift, and risk are continuously reviewed and reported." },
                            { step: "Improve", title: "Safe evolution", content: "The platform evolves safely as your business grows and needs change." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-lg z-10">
                                        {i + 1}
                                    </div>
                                    {i < 4 && <div className="w-0.5 flex-grow bg-primary/20 my-2" />}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-bold mb-1 text-primary">{item.step}</h3>
                                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                    <p className="text-muted">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="bg-secondary text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-6">See how your Microsoft 365 really operates today</h2>
                    <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
                        A structured assessment shows how your current setup behaves, where risk exists, and where automation can reduce dependency.
                    </p>
                    <Link to="/assessment">
                        <Button size="lg" className="h-14 px-8 text-lg">Book an Assessment</Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}
