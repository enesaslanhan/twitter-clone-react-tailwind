import SidebarSection from "../../../../assets/components/sidebar-section";
import UserCard from "../../../../assets/components/usercard";
import { whoFollowUsers } from "../../../../mock";
export default function WhoFollow() {
  return (
    <SidebarSection title="Kimi takip etmeli?" more="/">
      {whoFollowUsers.map((user) => <UserCard user={user} key={user.id} />)}
    </SidebarSection>
  );
}
