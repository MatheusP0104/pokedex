function PokemonCard({ id, name, type, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />

      <h2>#{id} {name}</h2>

      <p>
        Tipo: <span className="tipo">{type}</span>
      </p>
    </div>
  )
}

export default PokemonCard