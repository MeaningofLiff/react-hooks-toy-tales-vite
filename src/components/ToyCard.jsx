const TOYS_URL = "http://localhost:3001/toys";

export default function ToyCard({ toy, onLikeToy, onDonateToy }) {
  const { id, name, image, likes } = toy;

  function handleLikeClick() {
    const newLikes = likes + 1;

    fetch(`${TOYS_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then((r) => r.json())
      .then((updatedToy) => onLikeToy(updatedToy));
  }

  function handleDonateClick() {
    fetch(`${TOYS_URL}/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) onDonateToy(id);
    });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      {/* 👇 trailing space after "Likes" */}
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like &lt;3
      </button>
      <button className="del-btn" onClick={handleDonateClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}
 