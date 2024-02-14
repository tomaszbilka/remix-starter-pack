import { createCookieSessionStorage } from '@remix-run/node';

import type { TCountryCode } from './types';

export type TSessionData = {
  locale: TCountryCode;
};

type TSessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } = createCookieSessionStorage<
  TSessionData,
  TSessionFlashData
>({
  cookie: {
    httpOnly: true,
    maxAge: 604800,
    name: '__session',
    path: '/',
    sameSite: 'lax',
    secrets: ['cooki3s3cr3t'],
    secure: true,
  },
});

export { getSession, commitSession, destroySession };
