import ToyCard from "./ToyCard.jsx";

export default function ToyContainer({ toys, onLikeToy, onDonateToy }) {
  return (
    <div className="toy-container">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onLikeToy={onLikeToy}
          onDonateToy={onDonateToy}
        />
      ))}
    </div>
  );
}
 