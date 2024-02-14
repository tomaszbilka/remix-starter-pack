import { useContext } from 'react';
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import { Stack, Typography, unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material';
import { useChangeLanguage } from 'remix-i18next';
import { withEmotionCache } from '@emotion/react';

import type { ActionArgs, LinksFunction, LoaderArgs } from '@remix-run/node';
import type { ReactNode } from 'react';

import { commitSession, destroySession, getSession } from '~/sessions';
import ClientStyleContext from '~/contexts/ClientStyleContext';
import muiTheme from '~/utils/MUI/muiTheme';
import stylesheet from '~/styles/tailwind.css';

interface DocumentProps {
  children: ReactNode;
  title?: string;
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

const Document = withEmotionCache(({ children, title }: DocumentProps, emotionCache) => {
  const clientStyleData = useContext(ClientStyleContext);

  const data = useLoaderData();

  useChangeLanguage('pl');

  useEnhancedEffect(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (emotionCache.sheet as any)._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);

  return (
    <html lang={data?.locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={muiTheme.palette.secondary.contrastText} />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <meta name="emotion-insertion-point" content="emotion-insertion-point" />
      </head>
      <body id="app">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});

const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

export default App;

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  session.set('locale', 'pl');

  return json(
    { locale: 'pl' },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    },
  );
}

export const action = async ({ request }: ActionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));

  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
};

//--------------ERROR HANDLING--------------
const ErrorDocument = withEmotionCache(({ children, title }: DocumentProps, emotionCache) => {
  const clientStyleData = useContext(ClientStyleContext);

  useChangeLanguage('pl');

  useEnhancedEffect(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (emotionCache.sheet as any)._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);

  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content={muiTheme.palette.secondary.contrastText} />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <meta name="emotion-insertion-point" content="emotion-insertion-point" />
      </head>
      <body id="app">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});

export const ErrorBoundary = () => {
  const error = useRouteError();

  let ErrorComponent;
  if (isRouteErrorResponse(error)) {
    const serverError = error?.data?.serverError;
    const serverErrorStatus = serverError?.status || serverError?.response?.status;

    if (serverErrorStatus === 401) {
      ErrorComponent = <div>401 server response</div>;
    } else
      ErrorComponent = (
        <>
          <Typography variant="h5">{error?.data?.message || 'Fetching error'}</Typography>
          <div>Error component</div>
        </>
      );
  } else if (error instanceof Error) {
    ErrorComponent = (
      <Typography variant="h5">{error?.message || 'Sth went wrong in app...'}</Typography>
    );
  } else if (typeof error === 'string') {
    ErrorComponent = <Typography variant="h5">{error || 'Sth went wrong in app...'}</Typography>;
  } else {
    ErrorComponent = <Typography variant="h5">{'Unknow error occured in app...'}</Typography>;
  }
  return (
    <ErrorDocument title="Error">
      <Stack className="flex w-fit mx-auto items-center justify-center">{ErrorComponent}</Stack>
    </ErrorDocument>
  );
};
