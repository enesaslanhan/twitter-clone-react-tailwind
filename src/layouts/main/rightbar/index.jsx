import Footer from "./footer";
import Premium from "./premium";
import Search from "./search";
import Topics from "./topics";
import WhoFollow from "./who-follow";


export default function RightBar(){
    return(
        <aside className="w-[350px] mr-2.5 pb-16">
           <Search/>
           <Premium/>
           <Topics/>
           <WhoFollow/>
           <Footer/>
          
        </aside>
    )
}