/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar} from 'react-icons/hi2';

function Stats({bookings, confirmedStays, numDays, cabinCount}) {
    // 1. Calculate number of bookings
    const numBookings = bookings.length;

    // 2.
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
    
    // 3. 
    const checkins = confirmedStays.length
    
    // 4.
    //occupation = num checked in nights / all available nights(num days * num cabins)
    const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount);



    return (
      <>
        <Stat
          title="Bookings"
          color="blue"
          value={numBookings}
          icon={<HiOutlineBriefcase />}
        />
        <Stat
          title="Sales"
          color="green"
          value={formatCurrency(sales)}
          icon={<HiOutlineBanknotes />}
        />
        <Stat
          title="Check ins"
          color="indigo"
          value={checkins}
          icon={<HiOutlineCalendarDays />}
        />
        <Stat
          title="Occupancy rate"
          color="yellow"
          value={Math.round(occupation * 100) + '%'}
          icon={<HiOutlineChartBar />}
        />
      </>
    );
}

export default Stats
