/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin(){
    const queryClient = useQueryClient();
    const { isLoading: isEditing, mutate: editCabin } = useMutation({
      //Accept just one argument
      mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
      onSuccess: () => {
        toast.success("Cabin successfully edited");
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        });
        //reset();
        //setShowForm(false);
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

    return {isEditing, editCabin};
}