import { createContext, useContext, useReducer } from "react";
import ChildrenProps from "../../types/ChildrenPropType";

type State = {
  isPizzaDetailModalOpen: boolean;
};

type Action = {
  type: string;
  payLoad?: boolean;
};

const initialState: State = {
  isPizzaDetailModalOpen: false,
};

function menuReducer(state: State, action: Action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        isPizzaDetailModalOpen: !state.isPizzaDetailModalOpen,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const MenuContext = createContext({
  state: initialState,
  dispatch: () => null,
});

function MenuProvider({ children }: ChildrenProps) {
  const [{ isPizzaDetailModalOpen }, dispatch] = useReducer(
    menuReducer,
    initialState
  );

  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }

  return (
    <MenuContext.Provider value={{ isPizzaDetailModalOpen, toggleModal }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { MenuProvider, useMenu };
