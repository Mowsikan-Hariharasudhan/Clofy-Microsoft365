import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Check, X as XIcon } from 'lucide-react';

export default function WhoItsFor() {
    return (
        <>
            <section className="pt-32 pb-20 bg-gray-50/50">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl text-foreground">
                        Designed for teams that treat Microsoft 365 as critical infrastructure.
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mb-8 leading-relaxed">
                        This platform is not for everyone. And that’s intentional.
                        It works best for organisations that value clarity, control, and long-term ownership over quick fixes.
                    </p>
                </div>
            </section>

            <Section>
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="p-2 bg-green-100 text-green-700 rounded-lg"><Check /></span>
                                This is for you if
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "You run a growing company where Microsoft 365 is business-critical",
                                    "You want security and governance built in, not bolted on",
                                    "You care about audits, compliance, and AI readiness",
                                    "You want fewer surprises as your team scales",
                                    "You prefer predictable systems over reactive support",
                                    "You want one accountable owner for Microsoft 365 outcomes"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-lg text-muted">
                                        <Check className="text-primary mt-1 min-w-[20px]" size={20} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 p-6 bg-blue-50 text-blue-800 rounded-xl italic">
                                "Most of our clients are founders, CTOs, or COOs who don’t want Microsoft 365 to become a source of risk."
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="p-2 bg-red-100 text-red-700 rounded-lg"><XIcon /></span>
                                This is not for you if
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "You only need occasional, ad-hoc IT help",
                                    "You want to pay by the hour or per ticket",
                                    "You are looking for general IT or end-user support",
                                    "You prefer fast fixes over long-term stability",
                                    "You want maximum flexibility without guardrails"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-lg text-muted">
                                        <XIcon className="text-red-400 mt-1 min-w-[20px]" size={20} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 p-6 bg-gray-100 text-gray-700 rounded-xl">
                                We are not a traditional IT support company, and we don’t try to be.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-primary/5">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">What matters more than company size</h2>
                        <p className="text-xl text-muted mb-12">
                            Fit is less about how big your company is, and more about how you think.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 text-left">
                            {[
                                "You value systems over heroics",
                                "You want automation to reduce dependency",
                                "You expect decisions to be enforced consistently",
                                "You want to enable AI safely, not rush it"
                            ].map((item, i) => (
                                <Card key={i} className="bg-white">
                                    <span className="font-semibold text-lg">{item}</span>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-12">
                            <p className="text-lg font-medium mb-6">When this mindset is shared, the partnership works exceptionally well.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-secondary text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-6">Not sure if this is the right fit?</h2>
                    <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                        That’s exactly what the assessment is for. We’ll look at your Microsoft 365 environment, understand your priorities, and tell you honestly whether this model makes sense for you.
                    </p>
                    <Link to="/assessment">
                        <Button size="lg" className="h-14 px-8 text-lg">
                            Start with an Assessment
                        </Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}
