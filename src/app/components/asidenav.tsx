"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidenav() {
    const pathname = usePathname()

    interface Item {
        tittle: string,
        link: string,
    }

    const pages = [
        {tittle: "Home", link: "/"},
        {tittle: "Dashboard", link: "/dashboard"},
        {tittle: "Tables", link: "/tables"}
    ]

    const profile = [
        {tittle: "Profile", link: "/profile"},
        {tittle: "Sign in", link: "/signin"},
        {tittle: "Sign up", link: "/signup"}
    ]

    const selectedStyle = {
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(161, 161, 161, 0.2), 0 6px 20px 0 rgba(161, 161, 161, 0.19)"
      }


 return (
    <section className="fixed hidden md:block md:w-60 h-[94%] left-3 rounded-xl shadow-lg overflow-auto bg-zinc-100">
        
        <div className="flex fixed z-50 bg-zinc-100 w-60 h-20 items-center justify-center">
            cass
        </div>
        <div className="flex justify-center">
            <hr className="w-3/5 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-20"/>
        </div>
        
        <div className="flex flex-col p-5">
            {pages.map (i => (
                <Link 
                    style={i.link == pathname ? selectedStyle : {}} 
                    key={i.link} 
                    href={i.link}
                    className="p-3 hover:bg-zinc-200 rounded-[10px] transition duration-200"
                    >
                    {i.tittle}
                </Link>
            ))}
            <span className="text-neutral-400 py-3 font-semibold text-sm">ACCOUNT PAGES</span>
            {profile.map (j => (
                <Link 
                    style={j.link == pathname ? selectedStyle : {}} 
                    key={j.link} 
                    href={j.link}
                    className="p-3 hover:bg-zinc-200 rounded-[10px] transition duration-200"
                    >
                    {j.tittle}
                </Link>
            ))}
        </div>
    </section>
 )
}