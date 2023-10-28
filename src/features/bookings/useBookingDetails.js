/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBookingDetails(){
    const {bookingId} = useParams();
    // console.log(bookingId)
    const {isLoading, data: booking, error} = useQuery({
        queryKey: ['bookings'],
        queryFn: () => getBooking(bookingId)
    })

    return { isLoading, booking, error };
}