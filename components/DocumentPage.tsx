import { useParams, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const documentContent = {
  'discord-bots': {
    terms: {
      title: 'Discord Bots - Terms of Service',
      content: `<iframe src="../public/docs/discord-bots/tos.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
    privacy: {
      title: 'Discord Bots - Privacy Policy',
      content: `<iframe src="../public/docs/discord-bots/pp.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
  },
  'microsoft-apps': {
    terms: {
      title: 'Microsoft Apps - Terms of Service',
      content: `<iframe src="../public/docs/microsoft-apps/tos.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
    privacy: {
      title: 'Microsoft Apps - Privacy Policy',
      content: `<iframe src="../public/docs/micro-apps/pp.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
  },
  'desktop-apps': {
    terms: {
      title: 'Desktop Apps - Terms of Service',
      content: `<iframe src="../public/docs/desktop-apps/tos.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
    privacy: {
      title: 'Desktop Apps - Privacy Policy',
      content: `<iframe src="../public/docs/desktop-apps/pp.html" class="rounded-xl w-full h-[600px] border-0"></iframe>`,
    },
  },
};

const categoryTitles = {
  'discord-bots': 'Discord Bots',
  'microsoft-apps': 'Microsoft Apps',
  'desktop-apps': 'Desktop Apps',
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

  const document =
    documentContent[category as keyof typeof documentContent][type as 'terms' | 'privacy'];

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
        <Link to={`/${category}`} className="hover:text-foreground transition-colors">
          {categoryTitles[category as keyof typeof categoryTitles]}
        </Link>
        <span>/</span>
        <span className="text-foreground">
          {type === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
        </span>
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
            This document outlines the{' '}
            {type === 'terms' ? 'terms and conditions' : 'privacy practices'} for our{' '}
            {categoryTitles[category as keyof typeof categoryTitles].toLowerCase()}.
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
          <Link to={`/${category}`}>
            <Button variant="outline">View Other Documents</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
