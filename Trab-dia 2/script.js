document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('searchButton');
    var searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function() {
        var pokemonName = searchInput.value.toLowerCase();

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokemon não encontrado');
                }
                return response.json();
            })
            .then(data => {
              
                displayPokemon(data);

            
                searchButton.style.display = 'none';
            })
            .catch(error => {
                console.error('Erro ao buscar o Pokémon:', error);
                
            });
    });

    function displayPokemon(pokemonData) {
    
        var pokemonNameElement = document.createElement('p');
        pokemonNameElement.textContent = `Nome: ${pokemonData.name}`;
        document.body.appendChild(pokemonNameElement);

        var pokemonImageElement = document.createElement('img');
        pokemonImageElement.src = pokemonData.sprites.front_default;
        document.body.appendChild(pokemonImageElement);
    }
});
