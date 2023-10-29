/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { isLoading, mutate: logoutMethod } = useMutation({
      mutationFn: logout,
      onSuccess: () =>{
        // to remove all data in cache
        queryClient.removeQueries();
        navigate('/login', {replace: true});
      }
    });

    return { isLoading, logoutMethod };
}