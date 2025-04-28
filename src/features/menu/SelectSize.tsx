import * as React from "react";
import { red } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

export default function SelectSize() {
  const [size, setSize] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold !mb-2.5">Size</h2>
      <div className="flex flex-col font-(family-name:--font-default) text-black/70 lg:grid lg:grid-cols-2 lg:gap-x-15">
        {/* Small Size */}
        <div className="flex items-center">
          <Radio
            checked={size === "small"}
            onChange={handleChange}
            value="small"
            name="radio-buttons"
            size="small"
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <div className="w-full flex justify-between items-center">
            <p className="text-lg">Small (10")</p>
            <p className="text-sm">-$2.00</p>
          </div>
        </div>

        {/* Meduim Size */}
        <div className="flex items-center">
          <Radio
            checked={size === "medium"}
            onChange={handleChange}
            value="medium"
            name="radio-buttons"
            size="small"
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <div className="w-full flex justify-between items-center">
            <p className="text-lg">Medium (12")</p>
            <p className="text-sm">Included</p>
          </div>
        </div>

        {/* Large Size */}
        <div className="flex items-center">
          <Radio
            checked={size === "large"}
            onChange={handleChange}
            value="large"
            name="radio-buttons"
            size="small"
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <div className="w-full flex justify-between items-center">
            <p className="text-lg">Large (14")</p>
            <p className="text-sm">+$3.00</p>
          </div>
        </div>

        {/* X-Large Size */}
        <div className="flex items-center">
          <Radio
            checked={size === "x-large"}
            onChange={handleChange}
            value="x-large"
            name="radio-buttons"
            size="small"
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <div className="w-full flex justify-between items-center">
            <p className="text-lg">X-Large (14")</p>
            <p className="text-sm">+$5.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
