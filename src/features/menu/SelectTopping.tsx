import { red } from "@mui/material/colors";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateActivePizzaDetailToppings } from "./menuSlice";
import { toppingOptions } from "./options";

export default function SelectTopping() {
  const toppings = useSelector(
    (state: any) => state.menu.ActivePizzaDetail.toppings
  );
  const dispatch = useDispatch();

  const isChecked = (val: string) => toppings.includes(val);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    dispatch(updateActivePizzaDetailToppings(name));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2.5">Extra Toppings</h2>
      <div className="flex flex-col font-(family-name:--font-default) text-black/70 lg:grid lg:grid-cols-2 lg:gap-x-15">
        {toppingOptions.map(({ key, label, price }) => (
          <div key={key} className="flex items-center">
            <Checkbox
              checked={isChecked(key)}
              onChange={handleChange}
              name={key}
              size="small"
              sx={{
                color: red[800],
                "&.Mui-checked": { color: red[600] },
              }}
            />
            <div className="flex justify-between items-center w-full">
              <p className="text-lg">{label}</p>
              <p className="text-sm">+${price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
