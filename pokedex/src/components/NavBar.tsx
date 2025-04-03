interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
  }

function NavBar() {
    return       
    <nav> {pokemonList.map((pokemon) => (
        <button type="button" key={pokemon.name}>
          {pokemon.name}
          </button>
          ))}
      </nav>;
  }
  
  export default NavBar;