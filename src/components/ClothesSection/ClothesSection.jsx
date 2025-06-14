import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({
  handleCardClick,
  handleAddClick,
  onCardLike,
  clothingItems,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__text">Your items</p>
        <button className="clothes-section__button" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems.map((filteredCard, index) => (
          <ItemCard
            key={filteredCard._id || `item-${index}`}
            item={filteredCard}
            onCardClick={handleCardClick}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </div>
  );
}
