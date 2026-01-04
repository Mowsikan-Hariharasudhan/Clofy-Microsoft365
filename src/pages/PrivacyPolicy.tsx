import { Section } from '../components/ui/Section';

export default function PrivacyPolicy() {
    return (
        <Section>
            <div className="container-custom max-w-3xl prose prose-slate lg:prose-lg pt-16">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
                <p>This Privacy Policy explains how we collect, use, and protect personal information when you visit our website or engage with us.</p>
                <p>We take privacy seriously and aim to collect only what is necessary to operate our business responsibly.</p>

                <h2>Information we collect</h2>
                <p>We may collect limited personal information when you:</p>
                <ul>
                    <li>Fill out a contact or assessment request form</li>
                    <li>Communicate with us via email</li>
                    <li>Browse our website (basic usage data)</li>
                </ul>
                <p>This information may include your name, company name, work email address, and any details you choose to share.</p>

                <h2>How we use your information</h2>
                <p>We use collected information only to:</p>
                <ul>
                    <li>Respond to enquiries or assessment requests</li>
                    <li>Communicate about our services</li>
                    <li>Improve our website and content</li>
                    <li>Meet legal or regulatory obligations</li>
                </ul>
                <p>We do not sell or rent personal information.</p>

                <h2>Client data</h2>
                <p>When operating Microsoft 365 environments for clients, all customer data remains the property of the client.</p>
                <p>Access to client environments is limited, logged, and granted only when required to perform agreed responsibilities.</p>

                <h2>Legal basis for processing</h2>
                <ul>
                    <li>Consent provided by the individual</li>
                    <li>Legitimate business interests</li>
                    <li>Contractual necessity</li>
                    <li>Legal obligations</li>
                </ul>

                <h2>Data retention</h2>
                <p>Personal information is retained only for as long as necessary to fulfil its purpose or meet legal requirements.</p>

                <h2>Data security</h2>
                <p>We apply appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or misuse.</p>

                <h2>Third parties</h2>
                <p>We may use trusted third-party services to support website hosting, communication, or analytics. These providers are required to handle data responsibly and only for defined purposes.</p>

                <h2>Your rights</h2>
                <p>Depending on your location, you may have rights to:</p>
                <ul>
                    <li>Request access to your personal data</li>
                    <li>Request correction or deletion</li>
                    <li>Withdraw consent where applicable</li>
                    <li>Raise a concern with a data protection authority</li>
                </ul>

                <h2>Contact</h2>
                <p>If you have questions about this Privacy Policy or how your data is handled, please contact us via the website.</p>

                <p className="text-sm text-muted mt-8 mb-0">This policy may be updated periodically. The latest version will always be available on this page.</p>
            </div>
        </Section>
    );
}
