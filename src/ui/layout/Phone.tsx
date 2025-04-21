import { PhoneCall } from "lucide-react";
import { PlacedProp } from "../../types/PlacedPropType";
import { phone } from "../../data/restaurentInformation";

function Phone({ placedOn }: PlacedProp) {
  let responsiveCSS: string = "";
  if (placedOn === "header") responsiveCSS = "hidden lg:block";
  else if (placedOn === "sidebar") responsiveCSS = "block";

  return (
    <div className={`${responsiveCSS} cursor-pointer`}>
      <div className="flex gap-2 !p-2 rounded-lg bg-[var(--color-tomato)] text-white">
        <div className="flex justify-center items-center">
          <PhoneCall size={28} />
        </div>
        <div className="!pl-2.5 border-l-2">
          <p className="font-medium text-center">Call us now</p>
          <p className="text-xs text-center">{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Phone;
