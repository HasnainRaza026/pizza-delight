import { Heart } from "lucide-react";
import CardButton from "../../ui/CardButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { updatefavourites } from "./favouriteSlice";
import { successToast } from "../../utils/toastFunctions";

type PropType = {
  id: number;
  placedOn: string;
};

function FavouriteButton({ id, placedOn }: PropType) {
  const favourites = useSelector(
    (state: RootState) => state.favourites.favourites
  );
  const dispatch = useDispatch();

  // helper to see if this id is currently in favourites
  const isFav = favourites.includes(id);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // dispatch update
    dispatch(updatefavourites(id));
    // toast once based on *current* state before dispatch
    if (isFav) {
      successToast("Removed from favourite");
    } else {
      successToast("Added to favourite");
    }
  };

  return (
    <CardButton
      onClick={handleClick}
      className={placedOn === "home" ? "" : "!w-[35px] !h-[35px]"}
    >
      <Heart
        size={placedOn === "home" ? 12 : 20}
        color="white"
        strokeWidth={2.5}
        fill={isFav ? "white" : "none"}
      />
    </CardButton>
  );
}

export default FavouriteButton;
