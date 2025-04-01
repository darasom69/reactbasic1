  const pokemonList = [
    {
    name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
    function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
      <section>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      </section>
    );
  }
  
  export default PokemonCard;