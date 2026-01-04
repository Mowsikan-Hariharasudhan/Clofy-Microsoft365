import { Section } from '../components/ui/Section';

export default function SecurityStatement() {
    return (
        <>
            <section className="pt-32 pb-20 bg-background text-center">
                <div className="container-custom max-w-3xl">
                    <h1 className="text-4xl font-bold mb-6">Security is not a feature. It is how we operate.</h1>
                    <p className="text-xl text-muted">
                        This statement explains how we approach security when operating Microsoft 365 environments for our clients.
                        It is written for customers, partners, and auditors who want to understand our principles.
                    </p>
                </div>
            </section>

            <Section>
                <div className="container-custom max-w-3xl prose prose-slate lg:prose-lg">
                    <h2>Our security principle</h2>
                    <p>
                        We believe security should be enforced by systems, not dependent on individual behaviour.
                        Wherever possible, controls are automated, policies are enforced continuously, and access is limited by default.
                    </p>

                    <hr className="my-12 border-border" />

                    <h2>Identity and access control</h2>
                    <p>Identity is the primary security boundary in Microsoft 365.</p>
                    <ul>
                        <li>Multi-factor authentication is enforced by default</li>
                        <li>Access is granted based on role and context</li>
                        <li>Administrative privileges follow least-privilege principles</li>
                        <li>Access changes are logged and reviewable</li>
                    </ul>

                    <hr className="my-12 border-border" />

                    <h2>Data protection and governance</h2>
                    <p>Client data remains under the client’s ownership at all times. We design governance controls to limit unnecessary access.</p>
                    <ul>
                        <li>Controlled external sharing and guest access</li>
                        <li>Clear ownership and lifecycle management</li>
                        <li>Data exposure reviewed before enabling AI features</li>
                    </ul>

                    <hr className="my-12 border-border" />

                    <h2>Automation and operational security</h2>
                    <p>Repetitive administrative tasks are handled through automation wherever feasible. This reduces human error.</p>
                    <ul>
                        <li>User lifecycle actions follow defined rules</li>
                        <li>Policy enforcement is continuous</li>
                        <li>Exceptions are explicit and time-bound</li>
                    </ul>

                    <hr className="my-12 border-border" />

                    <h2>Compliance and audit readiness</h2>
                    <p>
                        Our operating model supports common regulatory expectations such as GDPR and HIPAA through enforced controls, traceability, and audit-ready configurations.
                        We do not offer legal certification. We provide systems that make compliance practical and provable.
                    </p>

                    <div className="mt-12 p-8 bg-secondary rounded-xl not-prose text-center">
                        <h3 className="text-xl font-bold mb-2">Transparency and accountability</h3>
                        <p className="text-muted">
                            We are open about how we operate, what controls are in place, and where responsibility lies.
                            Security is an ongoing process, not a one-time setup.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
