"use client"

import Image from 'next/image'
import Link from "next/link"; 
import { RxDashboard } from "react-icons/rx";
import { PiSignInFill } from "react-icons/pi";
import { BsRocketTakeoff } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { ImTable2 } from "react-icons/im";
import { usePathname } from "next/navigation";

export default function Sidenav() {
    const pathname = usePathname()
    
    const pages = [
        {icon: <AiOutlineHome/>, tittle: "Home", link: "/"},
        {icon: <RxDashboard/>, tittle: "Dashboard", link: "/dashboard"},
        {icon: <ImTable2/>, tittle: "Tables", link: "/tables"}
    ]

    const profile = [
        {icon: <CgProfile/>, tittle: "Profile", link: "/profile"},
        {icon: <PiSignInFill/>, tittle: "Sign in", link: "/signin"},
        {icon: <BsRocketTakeoff/>, tittle: "Sign up", link: "/signup"}
    ]

    const selectedStyle = {
        backgroundColor: "white",
        borderRadius: "10px",
        fontWeight: "bold",
        boxShadow: "0 4px 8px 0 rgba(161, 161, 161, 0.2), 0 6px 20px 0 rgba(161, 161, 161, 0.19)"
      }

      const selectedIcon = {
        backgroundColor: "rgb(59, 59, 92)",
        color: "white",
        boxShadow: "0 4px 8px 0 rgba(209, 209, 209, 0.2), 0 6px 20px 0 rgba(209, 209, 209, 0.19)"
      }


 return (
    <section className="fixed hidden lg:block lg:w-60 h-[94%] left-3 rounded-xl shadow-lg overflow-auto bg-zinc-100">
        <Link href={"/"} className="flex fixed z-50 w-60 h-20 items-center justify-center gap-3 transform hover:scale-105 transition duration-300">
            <Image src={"/amongus.png"} alt="Picture of the author" width={30} height={50}/>
            <p className='font-semibold'>Lils' Company</p>
        </Link>
        <div className="flex justify-center">
            <hr className="w-4/6 h-[0.099rem] bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-[5.5rem]"/>
        </div>
        
        <div className="flex flex-col p-5">
            {pages.map (i => (
                <Link 
                    style={i.link == pathname ? selectedStyle : {}} 
                    key={i.link} 
                    href={i.link}
                    className="p-3 hover:bg-zinc-200 rounded-[10px] transition duration-200 flex items-center gap-2"
                >
                    <span style={i.link == pathname ? selectedIcon : {}} className="bg-white p-2 w-9 h-9 rounded-lg flex justify-center items-center">{i.icon}</span>
                    {i.tittle}
                </Link>
            ))}
            <span className="text-neutral-400 py-3 font-semibold text-sm">ACCOUNT PAGES</span>
            {profile.map (j => (
                <Link 
                    style={j.link == pathname ? selectedStyle : {}} 
                    key={j.link} 
                    href={j.link}
                    className="p-3 hover:bg-zinc-200 rounded-[10px] transition duration-200 flex items-center gap-2"
                    >
                    <span style={j.link == pathname ? selectedIcon : {}} className="bg-white p-2 w-9 h-9 rounded-lg flex justify-center items-center">{j.icon}</span>
                    {j.tittle}
                </Link>
            ))}
        </div>
    </section>
 )
}