import { useParams, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const documentContent = {
  'discord-bots': {
    terms: {
      title: 'Discord Bots - Terms of Service',
      content: `
        <h2>Terms of Service for Discord Bots</h2>
        <p><strong>Last updated:</strong> [DATE]</p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>[Placeholder content for Terms of Service. Replace this section with your actual terms.]</p>
        
        <h3>2. Description of Service</h3>
        <p>[Details about your Discord bot services go here.]</p>
        
        <h3>3. User Obligations</h3>
        <p>[User responsibilities and obligations.]</p>
        
        <h3>4. Prohibited Uses</h3>
        <p>[List of prohibited activities.]</p>
        
        <h3>5. Limitation of Liability</h3>
        <p>[Liability limitations and disclaimers.]</p>
        
        <h3>6. Contact Information</h3>
        <p>[Your contact details for legal matters.]</p>
      `
    },
    privacy: {
      title: 'Discord Bots - Privacy Policy',
      content: `
        <h2>Privacy Policy for Discord Bots</h2>
        <p><strong>Last updated:</strong> [DATE]</p>
        
        <h3>1. Information We Collect</h3>
        <p>[Placeholder content for Privacy Policy. Replace this section with your actual privacy policy.]</p>
        
        <h3>2. How We Use Your Information</h3>
        <p>[Description of data usage.]</p>
        
        <h3>3. Information Sharing</h3>
        <p>[When and how information is shared.]</p>
        
        <h3>4. Data Security</h3>
        <p>[Security measures and protections.]</p>
        
        <h3>5. Your Rights</h3>
        <p>[User rights regarding their data.]</p>
        
        <h3>6. Contact Us</h3>
        <p>[Contact information for privacy concerns.]</p>
      `
    }
  },
  'microsoft-apps': {
    terms: {
      title: 'Microsoft Apps - Terms of Service',
      content: `
        <h2>Terms of Service for Microsoft Apps</h2>
        <p><strong>Last updated:</strong> [DATE]</p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>[Placeholder content for Microsoft Apps Terms of Service. Replace this section with your actual terms.]</p>
        
        <h3>2. Service Description</h3>
        <p>[Details about your Microsoft Office/Teams applications.]</p>
        
        <h3>3. License and Usage</h3>
        <p>[Licensing terms and usage restrictions.]</p>
        
        <h3>4. Data Handling</h3>
        <p>[How data is processed within Microsoft environment.]</p>
        
        <h3>5. Support and Updates</h3>
        <p>[Support policies and update procedures.]</p>
        
        <h3>6. Termination</h3>
        <p>[Terms regarding service termination.]</p>
      `
    },
    privacy: {
      title: 'Microsoft Apps - Privacy Policy',
      content: `
        <h2>Privacy Policy for Microsoft Apps</h2>
        <p><strong>Last updated:</strong> [DATE]</p>
        
        <h3>1. Data Collection</h3>
        <p>[Placeholder content for Microsoft Apps Privacy Policy. Replace this section with your actual privacy policy.]</p>
        
        <h3>2. Microsoft Integration</h3>
        <p>[How data flows between your app and Microsoft services.]</p>
        
        <h3>3. Data Storage</h3>
        <p>[Where and how data is stored.]</p>
        
        <h3>4. Third-Party Services</h3>
        <p>[Integration with other services.]</p>
        
        <h3>5. Compliance</h3>
        <p>[Regulatory compliance information.]</p>
        
        <h3>6. Updates to Policy</h3>
        <p>[How policy changes are communicated.]</p>
      `
    }
  },
  'desktop-apps': {
    terms: {
      title: 'Desktop Apps - Terms of Service',
      content: `
        <h2>Terms of Service for Desktop Apps</h2>
        <p><strong>Last updated:</strong> [DATE]</p>
        
        <h3>1. Software License</h3>
        <p>[Placeholder content for Desktop Apps Terms of Service. Replace this section with your actual terms.]</p>
        
        <h3>2. Installation and Usage</h3>
        <p>[Installation requirements and usage guidelines.]</p>
        
        <h3>3. System Requirements</h3>
        <p>[Minimum system requirements.]</p>
        
        <h3>4. Updates and Maintenance</h3>
        <p>[Software update policies.]</p>
        
        <h3>5. Intellectual Property</h3>
        <p>[Copyright and trademark information.]</p>
        
        <h3>6. Warranty and Support</h3>
        <p>[Warranty terms and support options.]</p>
      `
    },
    privacy: {
      title: 'Desktop Apps - Privacy Policy',
      content: `
        <h2>Privacy Policy for Desktop Apps</h2>
        <p><strong>Last updated:</strong> [DATE]</p>
        
        <h3>1. Local Data Processing</h3>
        <p>[Placeholder content for Desktop Apps Privacy Policy. Replace this section with your actual privacy policy.]</p>
        
        <h3>2. Network Communications</h3>
        <p>[What data is sent over the network.]</p>
        
        <h3>3. File Access</h3>
        <p>[What files the application accesses.]</p>
        
        <h3>4. Analytics and Telemetry</h3>
        <p>[Usage analytics and crash reporting.]</p>
        
        <h3>5. Data Retention</h3>
        <p>[How long data is retained.]</p>
        
        <h3>6. User Control</h3>
        <p>[User options for data management.]</p>
      `
    }
  }
};

const categoryTitles = {
  'discord-bots': 'Discord Bots',
  'microsoft-apps': 'Microsoft Apps',
  'desktop-apps': 'Desktop Apps'
};

export function DocumentPage() {
  const { category, type } = useParams<{ category: string; type: string }>();
  
  if (!category || !type || !documentContent[category as keyof typeof documentContent]) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1>Document Not Found</h1>
        <p className="text-muted-foreground mb-6">The requested document could not be found.</p>
        <Link to="/">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const document = documentContent[category as keyof typeof documentContent][type as 'terms' | 'privacy'];
  
  if (!document) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1>Document Not Found</h1>
        <p className="text-muted-foreground mb-6">The requested document type could not be found.</p>
        <Link to="/">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link to={`/${category}`} className="hover:text-foreground transition-colors">
          {categoryTitles[category as keyof typeof categoryTitles]}
        </Link>
        <span>/</span>
        <span className="text-foreground">{type === 'terms' ? 'Terms of Service' : 'Privacy Policy'}</span>
      </div>

      {/* Document Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link to={`/${category}`}>
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {categoryTitles[category as keyof typeof categoryTitles]}
            </Button>
          </Link>
        </div>
        
        <div className="border-l-4 border-primary pl-4">
          <h1 className="mb-2">{document.title}</h1>
          <p className="text-muted-foreground">
            This document outlines the {type === 'terms' ? 'terms and conditions' : 'privacy practices'} for our {categoryTitles[category as keyof typeof categoryTitles].toLowerCase()}.
          </p>
        </div>
      </div>

      {/* Document Content */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div 
            className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: document.content }}
          />
        </CardContent>
      </Card>

      {/* Document Footer */}
      <div className="bg-muted/50 rounded-lg p-6 text-center">
        <h3 className="mb-2">Questions or Concerns?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          If you have any questions about this document or need clarification on any terms, 
          our legal team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline">
            Contact Legal Team
          </Button>
          <Link to={`/${category}`}>
            <Button variant="outline">
              View Other Documents
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}