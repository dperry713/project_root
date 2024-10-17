import { fetchCharacters } from './api.js';

const charactersContainer = document.getElementById('characters-container');
const loadMoreButton = document.getElementById('load-more');
let offset = 0;
const limit = 20;

async function displayCharacters() {
    try {
      const characters = await fetchCharacters(limit, offset);
      characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character', 'col-md-3', 'mb-4');
        characterElement.innerHTML = `
          <div class="card">
            <img src="${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}" class="card-img-top" alt="${character.name}">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">${character.description || 'No description available.'}</p>
            </div>
          </div>
        `;
        charactersContainer.appendChild(characterElement);
      });
      offset += limit;
    } catch (error) {
      console.error('Error displaying characters:', error);
      charactersContainer.innerHTML += '<p class="text-danger">Error loading characters. Please try again later.</p>';
    }
}

loadMoreButton.addEventListener('click', displayCharacters);

// Initial load
displayCharacters();
