"use client"

import { usePathname } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";

export default function Header() {
    const pathname = usePathname()

    const pages = [
        {tittle: "Home", link: "/"},
        {tittle: "Dashboard", link: "/dashboard"},
        {tittle: "Tables", link: "/tables"}
    ]

    return (
        <div className="lg:w-9/12 lg:absolute lg:right-5 w-full rounded-xl flex px-5 text-slate-500">
            <div>
                {pages.map((i) => (
                    <div key={i.link} className={`${i.link == pathname ? 'absolute' : 'hidden'} text-sm text-slate-600 flex gap-1`}>
                        <p className="text-zinc-400">Pages / </p>
                        {i.tittle}</div>
                ))}
                {pages.map((i) => (
                <div key={i.link}
                className={`${i.link == pathname ? 'absolute' : 'hidden'} mt-5 text-slate-700 font-bold uppercase`}>{i.tittle}</div>
                ))}
            </div>

            <div className="flex justify-end items-center absolute right-4 gap-3">
                <div className="bg-white flex items-center border border-zinc-300 rounded-lg h-10 text-[0.9em] w-auto">
                    <BiSearchAlt className="w-[2.63rem] h-[2.63rem] p-2"/>
                    <input type="text" placeholder="Type here..." className="p-2 bg-transparent outline-none"/>
                </div>
                <button className="flex gap-1">
                    <BsFillPersonFill className="w-4 h-4"/>
                    <span className="text-sm font-semibold hidden md:block">Sign in</span>
                </button>
                <button>
                    <IoMdSettings className="w-4 h-4"/>
                </button>
                <button>
                    <IoMdNotifications className="w-4 h-4"/>
                </button>
            </div>
        </div>
    )
}