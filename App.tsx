import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { DocumentPage } from './components/DocumentPage';
import { CategoryOverview } from './components/CategoryOverview';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="legal-hub-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<CategoryOverview />} />
            <Route path="/websites/:site/:type" element={<DocumentPage />} />
            <Route path="/:category/:type" element={<DocumentPage />} />
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
