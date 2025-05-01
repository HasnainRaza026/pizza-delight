import { useSelector } from "react-redux";

function TitleAndDescription() {
  const { name, description } = useSelector(
    (state) => state.menu.ActivePizzaDetail
  );
  return (
    <div>
      <h1 className="text-2xl font-bold !mb-2.5 md:text-3xl">{name}</h1>
      <p className="text-sm font-medium text-black/70">{description}</p>
    </div>
  );
}

export default TitleAndDescription;
