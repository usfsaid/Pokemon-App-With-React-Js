// const PokemonList = ({ pokemon }) => {
//   return (
//     <div>
//       <p>
//         {pokemon.map((p) => (
//           <div key={p}>{p}</div>
//         ))}
//       </p>
//     </div>
//   );
// };

// export default PokemonList;

const PokemonList = ({ pokemon }) => {
  return (
    <div className="pokemon-list-container">
      <ul className="pokemon-list">
        {pokemon.map((p) => (
          <li key={p} className="pokemon-item">
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PokemonList;
