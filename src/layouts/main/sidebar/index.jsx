import Logo from "../../main/sidebar/logo";
import Menu from "../../main/sidebar/menu";
import Account from "../../main/sidebar/account";

export default function Sidebar(){
    return(
        <aside className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col sticky top-0">
            <Logo/>
            <Menu></Menu>
            <Account/>
        </aside>
    )
}