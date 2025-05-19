import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../services/apiMenu";

export function useFetchMenu() {
  const { data, error, isPending } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  const menu = data ? data : [];

  return { menu, error, isPending };
}
