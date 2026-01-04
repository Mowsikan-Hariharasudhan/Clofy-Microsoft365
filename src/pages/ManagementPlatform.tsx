import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Shield, Settings, Bot, Zap } from 'lucide-react';

export default function ManagementPlatform() {
    return (
        <>
            <section className="pt-32 pb-20 bg-background">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl tracking-tight text-foreground">
                        Microsoft 365 Management, built as a platform — not a service.
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mb-8 leading-relaxed">
                        We take full ownership of your Microsoft 365 environment. Not just keeping it running, but keeping it secure, governed, and ready for what comes next.
                    </p>
                    <Link to="/assessment">
                        <Button size="lg" className="h-14 px-8 text-lg">Start a Microsoft 365 Assessment</Button>
                    </Link>
                </div>
            </section>

            <Section className="bg-gray-50/50">
                <div className="container-custom">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl font-bold mb-6">What "platform ownership" actually means</h2>
                        <p className="text-lg text-muted">
                            Owning Microsoft 365 means the environment behaves the same way every day — regardless of who joins, leaves, or makes changes.
                            Security, governance, cost control, and automation are not projects. They are continuously enforced as part of the platform itself.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><Shield size={20} /></div>
                                <h3 className="text-xl font-bold">Security Hardening</h3>
                            </div>
                            <p className="text-muted mb-4">Security is designed into the tenant from day one, not added after an incident.</p>
                            <ul className="space-y-2 text-sm text-muted">
                                <li>• Entra ID MFA enforced by default</li>
                                <li>• Conditional Access based on risk</li>
                                <li>• Continuous review of posture</li>
                            </ul>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center"><Settings size={20} /></div>
                                <h3 className="text-xl font-bold">Tenant Governance</h3>
                            </div>
                            <p className="text-muted mb-4">As teams grow, access and data sprawl quietly increases. Governance keeps things safe.</p>
                            <ul className="space-y-2 text-sm text-muted">
                                <li>• Guest access controls</li>
                                <li>• SharePoint sprawl management</li>
                                <li>• Least-privilege policies</li>
                            </ul>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center"><Bot size={20} /></div>
                                <h3 className="text-xl font-bold">Copilot Readiness</h3>
                            </div>
                            <p className="text-muted mb-4">AI only works when your data boundaries are correct. Otherwise, it becomes a risk.</p>
                            <ul className="space-y-2 text-sm text-muted">
                                <li>• Data exposure assessment</li>
                                <li>• Access cleanup</li>
                                <li>• Guardrails for usage</li>
                            </ul>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center"><Zap size={20} /></div>
                                <h3 className="text-xl font-bold">Automation-First Ops</h3>
                            </div>
                            <p className="text-muted mb-4">Repetitive work is handled by automation, not people remembering steps.</p>
                            <ul className="space-y-2 text-sm text-muted">
                                <li>• Lifecycle automation</li>
                                <li>• License optimisation</li>
                                <li>• Fewer mistakes</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-6">Why this feels different from traditional IT support</h2>
                    <p className="text-xl text-muted max-w-3xl mx-auto mb-12">
                        Traditional support reacts to requests. Platform ownership prevents problems from appearing in the first place.
                        Decisions are enforced by policy. Changes are executed by automation. Humans focus on exceptions, not routine work.
                    </p>

                    <div className="p-8 bg-secondary rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">See how your platform really works</h3>
                        <p className="text-muted mb-8">Start with a structured assessment. Understand your security posture, governance gaps, automation opportunities, and AI readiness.</p>
                        <Link to="/assessment">
                            <Button size="lg" className="h-14 px-8 text-lg">Book an Assessment</Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}
