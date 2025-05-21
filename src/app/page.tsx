import { NavbarMenu } from "@/components/NavbarMenu";
import {Hero} from "../components/Hero"
import { About } from "@/components/About";
import { Profile } from "@/components/Profile";
import { ProfileInfo } from "@/components/ProfileInfo";
export default function Home() {
  return (
    <div>
       <Hero/>
       <NavbarMenu/>
       <About/>
       <ProfileInfo/>
       <Profile/>
    </div>
  );
}
