import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CssBaseline,
} from "@mui/material";

export default function PizzaSizeSelector() {
  const [size, setSize] = useState("medium");
  const handleSizeChange = (e) => setSize(e.target.value);

  return (
    <>
      <CssBaseline /> {/* Ensures only MUI’s reset is active */}
      <FormControl
        component="fieldset"
        className="space-y-10   " /* Tailwind padding, background, border-radius, shadow */
      >
        <FormLabel component="legend" className="text-xl font-semibold mb-4">
          Choose Pizza Size
        </FormLabel>

        <RadioGroup
          aria-label="pizza-size"
          name="pizza-size"
          value={size}
          onChange={handleSizeChange}
          className="flex flex-col space-y-3" /* Vertical list with 0.75rem gap */
        >
          <FormControlLabel
            value="small"
            control={<Radio />}
            label="Small"
            className="px-2" /* Horizontal padding for each option */
          />
          <FormControlLabel
            value="medium"
            control={<Radio />}
            label="Medium"
            className="px-2"
          />
          <FormControlLabel
            value="large"
            control={<Radio />}
            label="Large"
            className="px-2"
          />
          <FormControlLabel
            value="xlarge"
            control={<Radio />}
            label="X‑Large"
            className="px-2"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}
