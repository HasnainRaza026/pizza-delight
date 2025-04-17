export type PlacedProp = {
  placedOn: string;
};

// can also use this, but it might cause runtime errors --> setIsSidebarOpen?: (state: boolean) => void;
export type SidebarProps = PlacedProp & {
  setIsSidebarOpen: (state: boolean) => void;
};
