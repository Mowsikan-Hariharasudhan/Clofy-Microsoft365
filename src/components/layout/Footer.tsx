import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-white border-t border-border pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img src="/assets/logo_mark.png" alt="Clofy" className="h-12 w-auto object-contain" />
                            <span className="text-3xl font-bold tracking-tight text-foreground">Clofy</span>
                        </Link>
                        <p className="text-muted max-w-sm">
                            Microsoft 365, owned and under control. We help growing companies run Microsoft 365 as a secure, governed, and automated platform.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-muted">
                            <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link to="/assessment" className="hover:text-primary transition-colors">Assessment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-muted">
                            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/security-statement" className="hover:text-primary transition-colors">Security Statement</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 text-center text-sm text-muted">
                    &copy; {new Date().getFullYear()} Clofy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
