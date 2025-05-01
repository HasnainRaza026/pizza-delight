import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../services/apiMenu";

export function useFetchMenu() {
  const {
    data: menu,
    error,
    isPending,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  return { menu, error, isPending };
}
