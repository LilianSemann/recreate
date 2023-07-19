"use client"

export default function Header() {
    return (
        <div className="lg:w-9/12 absolute bottom-0 lg:right-5 w-full rounded-xl flex px-5 text-slate-500">
            <div className="flex justify-end items-center absolute right-4 gap-3">
                <button>About Us</button>
                <button>Blog</button>
                <button>License</button>
            </div>
        </div>
    )
}