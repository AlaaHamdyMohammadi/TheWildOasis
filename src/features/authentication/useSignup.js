/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup(){
    const navigate = useNavigate();
    const {isLoading, mutate: signupMethod} = useMutation({
        mutationFn: signup,
        onSuccess: (user) => {
            console.log(user);
            toast.success("Account Successfully created! Please verify the new account from the user's email address.")
        }
    })

    return {isLoading, signupMethod}
}