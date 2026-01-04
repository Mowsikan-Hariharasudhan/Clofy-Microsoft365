import { Section } from '../components/ui/Section';

export default function TermsOfService() {
    return (
        <Section>
            <div className="container-custom max-w-3xl prose prose-slate lg:prose-lg pt-16">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
                <p>These Terms of Service govern your use of our website and any engagement with our Microsoft 365 platform services.</p>
                <p>By using our website or engaging our services, you agree to these terms.</p>

                <h2>Scope of services</h2>
                <p>We provide outcome-based Microsoft 365 management focused on security, governance, automation, and platform ownership.</p>
                <p>Specific scope, responsibilities, and deliverables are defined in written agreements with each client.</p>

                <h2>No general IT or end-user support</h2>
                <p>Our services are not intended to replace general IT helpdesk or end-user support functions, unless explicitly agreed in writing.</p>

                <h2>Client responsibilities</h2>
                <p>Clients remain responsible for:</p>
                <ul>
                    <li>Their business operations and decisions</li>
                    <li>The accuracy of information provided to us</li>
                    <li>Compliance with applicable laws and regulations</li>
                    <li>Appropriate internal use of Microsoft 365</li>
                </ul>

                <h2>Access to client environments</h2>
                <p>Where access to a client’s Microsoft 365 environment is required, access is granted solely for performing agreed responsibilities.</p>
                <p>Access is limited, logged, and subject to review.</p>

                <h2>Security and compliance</h2>
                <p>We design and operate systems that support common security and compliance requirements.</p>
                <p>We do not provide legal advice or guarantee regulatory certification.</p>

                <h2>Intellectual property</h2>
                <p>All proprietary materials, frameworks, automation, and documentation developed by us remain our intellectual property, unless otherwise agreed in writing.</p>

                <h2>Limitation of liability</h2>
                <p>To the extent permitted by law, we are not liable for indirect, incidental, or consequential damages.</p>
                <p>Any liability is limited as defined in the applicable client agreement.</p>

                <h2>Website use</h2>
                <p>Website content is provided for informational purposes only and may change without notice.</p>

                <h2>Changes to these terms</h2>
                <p>These Terms of Service may be updated periodically. The latest version will always be available on this page.</p>

                <h2>Contact</h2>
                <p>If you have questions about these terms, please contact us via the website.</p>

                <p className="text-sm text-muted mt-8 mb-0">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>
        </Section>
    );
}
