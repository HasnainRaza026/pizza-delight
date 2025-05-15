import { useMutation } from "@tanstack/react-query";
import { placeOrder } from "../services/apiOrders";
import { errorToast, successToast } from "../utils/toastFunctions";

export function useMutateOrders(onSuccessFn: () => void) {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: placeOrder,
    onSuccess: () => {
      onSuccessFn();
      successToast("Order Placed Successfully");
    },
    onError: (err) => {
      errorToast(err.message);
    },
  });

  return { mutate, isPending, isError };
}
