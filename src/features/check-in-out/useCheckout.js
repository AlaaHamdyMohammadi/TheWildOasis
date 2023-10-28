/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"

export function useCheckout(){
    const queryClient = useQueryClient();
    const {iLoading: isCheckingout, mutate: checkout} = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId, {
            status: 'checked-out',
        }),
        //onSuccess is receive the data from apiBooking
        onSuccess:(data) => {
            toast.success(`Booking # ${data.id} successfully checked out`)
            // queryClient.invalidateQueries({
            //     queryKey: ['bookings']
            // }); this way by using query keys(array)

            //Another easy way
            queryClient.invalidateQueries({active: true});
        },
        onError: () => {
            toast.error(`There was an error while checking out `)
        }
    })



    return {isCheckingout, checkout}
}