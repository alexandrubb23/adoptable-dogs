import { NextResponse, NextRequest } from 'next/server';

export const middleware = (req: NextRequest): NextResponse | Response => {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [username, password] = Buffer.from(auth, 'base64')
      .toString()
      .split(':');

    if (username === 'dogs' && password === 'ilovedogs') {
      return NextResponse.next();
    }
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
};
