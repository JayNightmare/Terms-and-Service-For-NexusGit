import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { FileText, Shield, Bot, Monitor, Grid2x2 } from 'lucide-react';

// TODO: Transfer to backend database
const categoryData = {
  'discord-bots': {
    title: 'Discord Bots',
    description: 'Legal documentation for our Discord bot applications and services',
    icon: Bot,
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
    documents: [
      {
        type: 'terms',
        title: 'Terms of Service',
        description: 'Usage terms, conditions, and user obligations for Discord bot services',
      },
      {
        type: 'privacy',
        title: 'Privacy Policy',
        description: 'Data collection, usage, and privacy practices for Discord bots',
      },
    ],
    sites: [],
  },
  'microsoft-apps': {
    title: 'Microsoft Apps',
    description: 'Legal documentation for Microsoft application and service integrations',
    icon: Grid2x2,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    documents: [
      {
        type: 'terms',
        title: 'Terms of Service',
        description: 'Licensing terms and conditions for Microsoft application integrations',
      },
      {
        type: 'privacy',
        title: 'Privacy Policy',
        description: 'Data handling practices within Microsoft ecosystem',
      },
    ],
    sites: [],
  },
  'desktop-apps': {
    title: 'Desktop Apps',
    description: 'Legal documentation for desktop software applications',
    icon: Monitor,
    color: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    documents: [
      {
        type: 'terms',
        title: 'Terms of Service',
        description: 'Software licensing, installation, and usage terms',
      },
      {
        type: 'privacy',
        title: 'Privacy Policy',
        description: 'Local data processing and network communication policies',
      },
    ],
    sites: [],
  },
  websites: {
    title: 'Websites',
    description: 'Legal documentation for website services and online platforms',
    icon: FileText,
    color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400',
    sites: [
      {
        name: 'NexusGit',
        url: 'https://nexusgit.com',
        slug: 'nexusgit',
      },
      {
        name: 'Phun Party',
        url: 'https://phun.party',
        slug: 'phun-party',
      },
    ],
    documents: [],
  },
};

export function CategoryOverview() {
  const { category } = useParams<{ category: string }>();

  const categoryInfo = category ? categoryData[category as keyof typeof categoryData] : null;

  if (!categoryInfo) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1>Category Not Found</h1>
        <p className="text-muted-foreground mb-6">The requested category could not be found.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const IconComponent = categoryInfo.icon;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div
            className={`w-12 h-12 rounded-lg ${categoryInfo.color} flex items-center justify-center`}
          >
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h1 className="mb-2">{categoryInfo.title}</h1>
            <p className="text-muted-foreground">{categoryInfo.description}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categoryInfo.documents && categoryInfo.documents.length > 0 ? (
          categoryInfo.documents.map((doc) => (
            <Card key={doc.type} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                </div>
                <CardDescription>{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={`/${category}/${doc.type}`}>
                  <Button className="w-full">
                    <Shield className="w-4 h-4 mr-2" />
                    View Document
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground">No documents available for this category.</p>
        )}
        {category === 'websites' && categoryInfo.sites && categoryInfo.sites.length > 0 && (
          <>
            {categoryInfo.sites.map((site) => (
              <div key={site.slug} className="grid gap-4 md:grid-cols-2">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">{site.name} - Terms of Service</CardTitle>
                    </div>
                    <CardDescription>Usage terms and conditions for {site.name}.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/websites/${site.slug}/terms`}>
                      <Button className="w-full">
                        <Shield className="w-4 h-4 mr-2" />
                        View Terms of Service
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">{site.name} - Privacy Policy</CardTitle>
                    </div>
                    <CardDescription>
                      Data collection and privacy practices for {site.name}.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/websites/${site.slug}/privacy`}>
                      <Button className="w-full">
                        <Shield className="w-4 h-4 mr-2" />
                        View Privacy Policy
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          These documents are regularly updated to reflect current practices and legal requirements.
        </p>
        <Link to="/">
          <Button variant="outline">Back to All Categories</Button>
        </Link>
      </div>
    </div>
  );
}
