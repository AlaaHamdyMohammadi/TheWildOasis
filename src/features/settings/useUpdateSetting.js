/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting(){
    const queryClient = useQueryClient();
    const {isLoading: isUpdating, mutate: editSetting} = useMutation({
        mutationFn: updateSetting,
        onSuccess: () => {
            toast.success("Setting successfully edited");
            queryClient.invalidateQueries({
                queryKey: ['settings'],
            })
        },
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { isUpdating, editSetting };
}