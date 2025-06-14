import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

export default function Profile({
  onSelectCard,
  onAddNewItem,
  clothingItems,
  onCardLike,
  handleEditProfile,
  handleSignOut,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleEditProfile={handleEditProfile}
          handleSignOut={handleSignOut}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          handleCardClick={onSelectCard}
          handleAddClick={onAddNewItem}
          clothingItems={clothingItems}
          onCardLike={onCardLike}
          handleEditProfile={handleEditProfile}
          handleSignOut={handleSignOut}
        />
      </section>
    </div>
  );
}
