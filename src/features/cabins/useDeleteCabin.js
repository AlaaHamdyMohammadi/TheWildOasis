/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin(){
  const queryClient = useQueryClient();
 
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    //mutate is a function
    mutationFn: deleteCabinApi,
    //onSuccess = take callback function
    onSuccess: () => {
      toast.success("Cabin successfuly deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  //console.log(test);

  return {isDeleting, deleteCabin};
}