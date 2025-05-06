import { useSelector } from "react-redux";
import FavouriteButton from "../favourite/FavouriteButton";
import { RootState } from "../../store";

function TitleAndDescription() {
  const { id, name, description } = useSelector(
    (state: RootState) => state.menu.ActivePizzaDetail
  );

  return (
    <div>
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-bold !mb-2.5 md:text-3xl">{name}</h1>
        <FavouriteButton id={id} placedOn={"menu"} />
      </div>
      <p className="text-sm font-medium text-black/70">{description}</p>
    </div>
  );
}

export default TitleAndDescription;
