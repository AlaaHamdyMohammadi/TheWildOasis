/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export function useCheckin(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {iLoading: isCheckingIn, mutate: checkin} = useMutation({
        mutationFn: ({bookingId, breakfast}) => updateBooking(bookingId, {
            status: 'checked-in',
            isPaid: true,
            ...breakfast,
        }),
        //onSuccess is receive the data from apiBooking
        onSuccess:(data) => {
            toast.success(`Booking # ${data.id} successfully checked in`)
            // queryClient.invalidateQueries({
            //     queryKey: ['bookings']
            // }); this way by using query keys(array)

            //Another easy way
            queryClient.invalidateQueries({active: true});
            navigate('/')
        },
        onError: () => {
            toast.error(`There was an error while checking in `)
        }
    })



    return {isCheckingIn, checkin}
}