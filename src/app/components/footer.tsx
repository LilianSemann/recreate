"use client"

import { FaHeart } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="flex absolute bottom-3 lg:right-5 lg:w-9/12 w-full h-auto text-slate-500 text-sm">
            <div className="absolute right-3 flex gap-4">
                <button>About Us</button>
                <button>Blog</button>
                <button>License</button>
            </div>
            <div className="flex gap-1 items-center">
                <p>© 2023, recreated with</p><FaHeart className="w-3 h-3"/><p>by Lilian</p>
            </div>
        </div>
    )
}

{/* <div className=" absolute bottom-0 lg:right-5  rounded-xl flex px-5 text-slate-500">
<div className=" absolute  gap-3">
    <button>About Us</button>
    <button>Blog</button>
    <button>License</button>
</div>
</div> */}