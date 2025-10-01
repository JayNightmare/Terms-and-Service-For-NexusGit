import { useParams, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const documentContent = {
  'discord-bots': {
    terms: {
      title: 'Discord Bots - Terms of Service',
      content: `<iframe src="/docs/discord-bots/tos.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
    privacy: {
      title: 'Discord Bots - Privacy Policy',
      content: `<iframe src="/docs/discord-bots/pp.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
  },
  'microsoft-apps': {
    terms: {
      title: 'Microsoft Apps - Terms of Service',
      content: `<iframe src="/docs/microsoft-apps/tos.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
    privacy: {
      title: 'Microsoft Apps - Privacy Policy',
      content: `<iframe src="/docs/microsoft-apps/pp.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
  },
  'desktop-apps': {
    terms: {
      title: 'Desktop Apps - Terms of Service',
      content: `<iframe src="/docs/desktop-apps/tos.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
    privacy: {
      title: 'Desktop Apps - Privacy Policy',
      content: `<iframe src="/docs/desktop-apps/pp.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
  },
  websites: {
    nexusgit: {
      terms: {
        title: 'NexusGit - Terms of Service',
        content: `<iframe src="/docs/websites/nexusgit/tos.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
      },
      privacy: {
        title: 'NexusGit - Privacy Policy',
        content: `<iframe src="/docs/websites/nexusgit/pp.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
      },
    },
    'phun-party': {
      terms: {
        title: 'Phun Party - Terms of Service',
        content: `<iframe src="/docs/websites/phun-party/tos.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
      },
      privacy: {
        title: 'Phun Party - Privacy Policy',
        content: `<iframe src="/docs/websites/phun-party/pp.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
      },
    },
  },
};

const categoryTitles = {
  'discord-bots': 'Discord Bots',
  'microsoft-apps': 'Microsoft Apps',
  'desktop-apps': 'Desktop Apps',
  websites: 'Websites',
};
export function DocumentPage() {
  const { category, type, site } = useParams<{ category: string; type: string; site?: string }>();

  // For websites, use the site parameter; for other categories, use category/type pattern
  const actualCategory = site ? 'websites' : category;
  const actualType = site ? type : type;

  if (
    !actualCategory ||
    !actualType ||
    !documentContent[actualCategory as keyof typeof documentContent]
  ) {
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

  let document;
  if (actualCategory === 'websites' && site) {
    const websiteContent = documentContent.websites as any;
    document = websiteContent[site]?.[actualType as 'terms' | 'privacy'];
  } else {
    const categoryContent = documentContent[actualCategory as keyof typeof documentContent] as any;
    document = categoryContent?.[actualType as 'terms' | 'privacy'];
  }

  if (!document) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1>Document Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The requested document type could not be found.
        </p>
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
        <Link to="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to={`/${actualCategory}`} className="hover:text-foreground transition-colors">
          {categoryTitles[actualCategory as keyof typeof categoryTitles]}
        </Link>
        {actualCategory === 'websites' && site && (
          <>
            <span>/</span>
            <span className="text-foreground">
              {site === 'nexusgit' ? 'NexusGit' : site === 'phun-party' ? 'Phun Party' : site}
            </span>
          </>
        )}
        <span>/</span>
        <span className="text-foreground">
          {actualType === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
        </span>
      </div>

      {/* Document Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link to={`/${actualCategory}`}>
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {categoryTitles[actualCategory as keyof typeof categoryTitles]}
            </Button>
          </Link>
        </div>

        <div className="border-l-4 border-primary pl-4">
          <h1 className="mb-2">{document.title}</h1>
          <p className="text-muted-foreground">
            This document outlines the{' '}
            {actualType === 'terms' ? 'terms and conditions' : 'privacy practices'} for our{' '}
            {categoryTitles[actualCategory as keyof typeof categoryTitles].toLowerCase()}.
          </p>
        </div>
      </div>

      {/* Document Content */}
      <Card className="mb-8 bg-[#0a0a0a]">
        <CardContent className="p-8">
          <div
            className="prose prose-gray max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: document.content }}
          />
        </CardContent>
      </Card>

      {/* Document Footer */}
      <div className="bg-muted/50 rounded-lg p-6 text-center">
        <h3 className="mb-2">Questions or Concerns?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          If you have any questions about this document or need clarification on any terms, our
          legal team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline">Contact Legal Team</Button>
          <Link to={`/${actualCategory}`}>
            <Button variant="outline">View Other Documents</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
