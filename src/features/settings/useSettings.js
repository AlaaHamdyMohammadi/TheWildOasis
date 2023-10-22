/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useSettings(){
    const {isLoading, data: settings, error} = useQuery({
        queryFn: getSettings,
        queryKey: ['settings'],
    })
    return { isLoading, settings, error };
}