const PUBLIC_KEY = 'your_public_key_here';
const PRIVATE_KEY = 'your_private_key_here';

function generateAuthParams() {
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
  return `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
}

export async function fetchCharacters(limit, offset) {
  const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
  const url = `${baseUrl}?${generateAuthParams()}&limit=${limit}&offset=${offset}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  const data = await response.json();
  return data.data.results;
}