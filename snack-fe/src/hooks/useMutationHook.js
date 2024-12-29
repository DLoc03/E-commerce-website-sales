import { useMutation } from "@tanstack/react-query";

export const useMutaitonHook = (fnCallBack) => {
  const mutation = useMutation({
    mutationFn: fnCallBack,
  });
  return mutation;
};
