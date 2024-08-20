import modals from "../routes/modals"
import {useModal} from "../store/modal/hook"

export default function Modal(){

    const modal=useModal()
    const currentModal=modals.find(m=> m.name==modal.name)
    return(
        <div className="fixed inset-0 bg-[#5b7093]/40 flex items-center justify-center z-20">
            <div className="bg-black max-w-[600px] w-full rounded-2xl max-h[90vh] overflow-auto">
            {currentModal&&<currentModal.element/> }
            </div>
        </div>
    )
}