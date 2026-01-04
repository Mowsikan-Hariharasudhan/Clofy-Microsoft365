import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ShieldAlert, FileSearch, Lock, Database } from 'lucide-react';

export default function SecurityGovernance() {
    return (
        <>
            <section className="pt-32 pb-20 bg-background overflow-hidden relative">
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl tracking-tight text-foreground">
                        Security, governance, and AI readiness — enforced by design.
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mb-8 leading-relaxed">
                        Compliance is not a document. It is how your Microsoft 365 environment behaves every day.
                        We design and operate Microsoft 365 so security rules, data boundaries, and access controls are applied automatically — not remembered manually.
                    </p>
                    <Link to="/assessment">
                        <Button size="lg" className="h-14 px-8 text-lg">Start a Security & Readiness Assessment</Button>
                    </Link>
                </div>
            </section>

            <Section className="bg-gray-50/50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-6">Why most Microsoft 365 environments feel risky</h2>
                        <p className="text-lg text-muted mb-6">
                            On paper, Microsoft 365 supports GDPR, HIPAA, and most modern compliance frameworks.
                            In reality, risk appears when access grows faster than governance, data is shared without clear ownership, and admins accumulate privileges over time.
                        </p>
                        <p className="text-lg font-medium">Nothing looks broken. Until someone asks for proof.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                                <ShieldAlert size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Silent Drift</h3>
                            <p className="text-muted text-sm">Permissions expand over time. Without automated cleanup, every old account is a potential door left open.</p>
                        </Card>
                        <Card>
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                                <Database size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Data Sprawl</h3>
                            <p className="text-muted text-sm">Files shared externally, guest links that never expire, and Teams sites with no clear owners.</p>
                        </Card>
                        <Card>
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <Lock size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Admin Privilege</h3>
                            <p className="text-muted text-sm">Too many global admins. Access granted "just for now" that becomes permanent.</p>
                        </Card>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center">How we enforce security</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Identity & Access Control</h3>
                            <p className="text-muted mb-4">Access is granted based on role, device trust, and context — not convenience.</p>
                            <ul className="space-y-2 text-muted">
                                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Mandatory MFA via Entra ID</li>
                                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Conditional Access policies</li>
                                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Least-privilege admin roles</li>
                                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Continuous access review</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Data Governance</h3>
                            <p className="text-muted mb-4">Data stays where it belongs, and is shared intentionally.</p>
                            <ul className="space-y-2 text-muted">
                                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> External sharing rules</li>
                                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Guest access controls</li>
                                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Ownership and lifecycle clarity</li>
                                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Reduced SharePoint and Teams sprawl</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-primary/5">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-6">AI readiness without data exposure</h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
                        Copilot and AI tools amplify whatever permissions already exist. If data is over-shared, AI will expose it faster.
                        That’s why AI readiness starts with cleanup.
                    </p>
                    <div className="inline-block p-6 bg-white rounded-xl shadow-sm border border-border text-left">
                        <h4 className="font-bold mb-4">The AI Safety Checklist</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["Data exposure assessment", "Over-shared content ID", "Access remediation", "Guardrails for Copilot"].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded border border-primary flex items-center justify-center text-primary text-xs">✓</div>
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
