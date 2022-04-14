export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://adoptable-dogs.vercel.app/api'
    : 'http://localhost:3000/api';
