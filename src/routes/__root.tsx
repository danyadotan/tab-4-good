/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { ContactProvider } from '@/components/tab/ContactDialog';
import { Toaster } from '@/components/ui/toaster';
import useThemeSync from '@/hooks/useThemeSync';
import appCss from '@/index.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'TAB@Work — Execution infrastructure for AI-native organizations' },
      { name: 'description', content: 'TAB detects, coordinates, and recovers work that stalls across people, enterprise systems, and AI agents.' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }, { rel: 'icon', href: '/images/favicon.png' }],
  }),
  shellComponent: RootDocument,
});

function RootDocument() {
  useThemeSync();
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        <QueryClientProvider client={queryClientInstance}>
          <ContactProvider>
            <Outlet />
            <Toaster />
          </ContactProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}
