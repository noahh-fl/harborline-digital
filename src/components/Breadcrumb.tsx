import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const fullItems = [{ name: 'Home', path: '/' }, ...items];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://harborlinedigital.com${item.path}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm text-navy/60">
          {fullItems.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-navy/40" aria-hidden="true" />
              )}
              {index === fullItems.length - 1 ? (
                <span className="font-semibold text-navy" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-navy transition-colors underline decoration-navy/20 hover:decoration-navy/60"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
