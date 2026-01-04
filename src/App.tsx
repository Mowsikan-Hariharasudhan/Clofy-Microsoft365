import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import WhoItsFor from './pages/WhoItsFor';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Assessment from './pages/Assessment';
import SecurityGovernance from './pages/SecurityGovernance';
import ManagementPlatform from './pages/ManagementPlatform';
import SecurityStatement from './pages/SecurityStatement';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-its-for" element={<WhoItsFor />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/management" element={<ManagementPlatform />} />
          <Route path="/security" element={<SecurityGovernance />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/security-statement" element={<SecurityStatement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
