import * as React from "react";
import { red } from "@mui/material/colors";
import { Checkbox } from "@mui/material";

export default function SelectTopping() {
  const [topping, setTopping] = React.useState({
    chicken: false,
    tomatoes: false,
    cheese: false,
    onions: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    if (name === "chicken")
      setTopping((prev) => ({ ...prev, chicken: !prev.chicken }));
    else if (name === "tomatoes")
      setTopping((prev) => ({ ...prev, tomatoes: !prev.tomatoes }));
    else if (name === "cheese")
      setTopping((prev) => ({ ...prev, cheese: !prev.cheese }));
    else if (name === "onions")
      setTopping((prev) => ({ ...prev, onions: !prev.onions }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold !mb-2.5">Extra Toppings</h2>
      <div className="flex flex-col font-(family-name:--font-default) text-black/70">
        {/* Chicken Topping */}
        <div className="flex items-center">
          <Checkbox
            checked={topping.chicken}
            onChange={handleChange}
            name="chicken"
            size="small"
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <div className="w-full flex justify-between items-center">
            <p className="text-lg">Chicken</p>
            <p className="text-sm">+$2.00</p>
          </div>
        </div>

        {/* Tomatoes Topping */}
        <div className="flex items-center">
          <Checkbox
            checked={topping.tomatoes}
            onChange={handleChange}
            name="tomatoes"
            size="small"
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <div className="w-full flex justify-between items-center">
            <p className="text-lg">Tomatoes</p>
            <p className="text-sm">+$0.75</p>
          </div>
        </div>

        {/* Cheese Topping */}
        <div className="flex items-center">
          <Checkbox
            checked={topping.cheese}
            onChange={handleChange}
            name="cheese"
            size="small"
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <div className="w-full flex justify-between items-center">
            <p className="text-lg">Cheese</p>
            <p className="text-sm">+$1.50</p>
          </div>
        </div>

        {/* Onions Topping */}
        <div className="flex items-center">
          <Checkbox
            checked={topping.onions}
            onChange={handleChange}
            name="onions"
            size="small"
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <div className="w-full flex justify-between items-center">
            <p className="text-lg">Onions</p>
            <p className="text-sm">+$0.75</p>
          </div>
        </div>
      </div>
    </div>
  );
}
