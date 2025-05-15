import { useMutation } from "@tanstack/react-query";
import { placeOrder } from "../services/apiOrders";
import { errorToast, successToast } from "../utils/toastFunctions";

export function useMutateOrders() {
  const { mutate, isPending } = useMutation({
    mutationFn: placeOrder,
    onSuccess: () => {
      successToast("Order Placed Successfully");
    },
    onError: (err) => {
      errorToast(err.message);
    },
  });

  return { mutate, isPending };
}
