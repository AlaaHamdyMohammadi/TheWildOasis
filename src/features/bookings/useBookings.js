/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import SortBy from "../../ui/SortBy";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //SortBy
  const sortByRow = searchParams.get("sortBy") || 'startDate-desc';
  const [field, direction] = sortByRow.split('-');
  const sortBy = { field, direction };  
  

  const { isLoading, data: bookings } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings };
}
