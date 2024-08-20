import store from "../../store"
import {_setModal,_removeModal} from "../modal"

export const setModal=(name,data=false)=>store.dispatch(_setModal({name,data}))
export const removeModal=data=>store.dispatch(_removeModal())