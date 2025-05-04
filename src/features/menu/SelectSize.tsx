import * as React from "react";
import { red } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import { useDispatch, useSelector } from "react-redux";
import { updateActivePizzaDetailSize } from "./menuSlice";
import { sizeOptions } from "./options";

export default function SelectSize() {
  const { size } = useSelector((state: any) => ({
    size: state.menu.ActivePizzaDetail.size,
  }));
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateActivePizzaDetailSize(event.target.value));
  };

  return (
    <div>
      <h2 className="text-xl font-bold !mb-2.5">Size</h2>
      <div className="flex flex-col font-(family-name:--font-default) text-black/70 lg:grid lg:grid-cols-2 lg:gap-x-15">
        {sizeOptions.map(({ key, label, price }) => (
          <div key={key} className="flex items-center">
            <Radio
              checked={size === key}
              onChange={handleChange}
              value={key}
              name="radio-buttons"
              size="small"
              sx={{
                color: red[800],
                "&.Mui-checked": {
                  color: red[600],
                },
              }}
            />
            <div className="flex justify-between items-center w-full">
              <p className="text-lg">{label}</p>
              <p className="text-sm">
                {price === 0
                  ? "Included"
                  : price < 0
                    ? `-$${(price * -1).toFixed(2)}`
                    : `+$${price.toFixed(2)}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
