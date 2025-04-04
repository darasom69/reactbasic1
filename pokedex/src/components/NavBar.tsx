interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((onePokemonfromTheList) => (
        <button
          type="button"
          key={onePokemonfromTheList.name}
          onClick={() => {
            setPokemonName(onePokemonfromTheList.name);
            if (onePokemonfromTheList.name === "pikachu") {
              alert("pika pikachu !!!");
            }
          }}
          
        >
          {onePokemonfromTheList.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;