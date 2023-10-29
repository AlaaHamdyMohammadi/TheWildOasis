/* eslint-disable no-unused-vars */
import ButtonIcon from "../../ui/ButtonIcon"
import {HiArrowRightOnRectangle} from 'react-icons/hi2'
import { useLogout } from "./useLogout"
import SpinnerMini from '../../ui/SpinnerMini'
function Logout() {
    const { isLoading, logoutMethod } = useLogout();
    return (
        <ButtonIcon disabled={isLoading} onClick={logoutMethod}>
            {!isLoading ? <HiArrowRightOnRectangle/> : <SpinnerMini/>}
        </ButtonIcon>
    )
}

export default Logout
