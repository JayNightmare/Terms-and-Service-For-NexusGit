import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import { Bot, Monitor, Grid2x2, ArrowRight, Shield, FileText } from 'lucide-react';

// TODO: Fetch doc and site count from possible backend integration
const applications = [
  {
    id: 'discord-bots',
    title: 'Discord Bots',
    description: 'Comprehensive legal documentation for Discord bot applications and integrations',
    icon: Bot,
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
    documentCount: 2,
    lastUpdated: '2024-08-07',
  },
  {
    id: 'microsoft-apps',
    title: 'Microsoft Apps',
    description: 'Legal documentation for Microsoft application and service integrations',
    icon: Grid2x2,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    documentCount: 2,
    lastUpdated: '2024-08-07',
  },
  {
    id: 'desktop-apps',
    title: 'Desktop Apps',
    description: 'Terms and policies for desktop software applications and services',
    icon: Monitor,
    color: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    documentCount: 2,
    lastUpdated: '2024-08-07',
  },
  {
    id: 'websites',
    title: 'Websites',
    description: 'Legal documentation for website services and online platforms',
    icon: FileText,
    color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400',
    documentCount: 2,
    SiteCount: 2,
    lastUpdated: '2025-09-30',
  },
];

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        <h1 className="mb-4">Legal Documentation Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Centralized access to Terms of Service and Privacy Policy documents for all our
          applications and services. Browse by category to find the legal documentation you need.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-semibold">
                  {applications.reduce((total, app) => total + app.documentCount, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Documents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{applications.length}</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-semibold">100%</p>
                <p className="text-sm text-muted-foreground">Up to Date</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Application Categories */}
      <div className="mb-8">
        <h2 className="mb-6 text-center">Application Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {applications.map((app) => (
            <Card key={app.id} className="hover:shadow-lg transition-all duration-200 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${app.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <app.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {app.documentCount} docs
                  </Badge>
                  {app.SiteCount && (
                    <Badge variant="secondary" className="text-xs">
                      {app.SiteCount > 1 ? `${app.SiteCount} sites` : `${app.SiteCount} site`}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{app.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>Last updated: {new Date(app.lastUpdated).toLocaleDateString()}</span>
                </div>
                <Link to={`/${app.id}`}>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    View Documents
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
        <h3 className="mb-2">Need Help?</h3>
        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
          If you have questions about any of our legal documents or need clarification on specific
          terms, please don't hesitate to contact our legal team.
        </p>
        <Button variant="outline">Contact Legal Team</Button>
      </div>
    </div>
  );
}
