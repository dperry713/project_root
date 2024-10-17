import config, { getAuthParams } from '../config.js';

export async function fetchCharacters(limit = 20, offset = 0) {
  const authParams = getAuthParams();
  const url = new URL(`${config.baseUrl}/characters`);
  
  // Add query parameters
  url.search = new URLSearchParams({
    ...authParams,
    limit: limit,
    offset: offset
  }).toString();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
}

