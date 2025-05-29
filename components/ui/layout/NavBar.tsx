'use client';

import { useAuth, UserButton } from "@clerk/nextjs";
import Container from "@/components/ui/container"; // ✅ تم التصحيح هنا
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../button";
import SearchInput from "@/components/searchinput";
import { ModeToggle } from "@/components/theme-toggle";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
   const router = useRouter()
   const {userId} =useAuth()
  return (
    <div className="sticky top-0 border-b border-primary/10 bg-secondary">
     <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 cursor-pointer" onClick={()=> 
            router.push('/')}>
          <Image src='/logo.svg' alt="logo" width={30} height={30} />
           <div className="font-bold text-xl"> Stay Savve</div>
          </div>
          <SearchInput/>
           <div className="flex gap-3 items-center">
            <div>
              <ModeToggle/>
              <NavMenu/>
               </div>
           <UserButton afterSignOutUrl="/" />
           {!userId && <>
           <Button onClick={() => router.push('/sign-in')} variant="outline" size='sm'>sige in</Button>
           <Button onClick={() => router.push('/sign-up')} size='sm'>sige up</Button>
           </>}
           </div>
         </div>
      </Container>
     </div>
  );
};

export default NavBar;
