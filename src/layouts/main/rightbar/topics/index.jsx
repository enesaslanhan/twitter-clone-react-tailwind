import SidebarSection from "../../../../assets/components/sidebar-section";
import { topics } from "../../../../assets/utils/consts";
import Topic from "./topic";
import {Link} from "react-router-dom"
export default function Topics() {
  return (
    <SidebarSection title="Sizin için trendler"
      more="/trends"
    >
      {topics.map((topic,index)=>(
        <Topic item={topic} key={index}/>
      ))}
    </SidebarSection>
  );
}
