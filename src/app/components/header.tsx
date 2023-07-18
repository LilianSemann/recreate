import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

export default function Header() {
    return (
        <section className="flex items-center lg:w-9/12 lg:absolute lg:right-5 w-full justify-center rounded-xl p-5">
            <div className="bg-zinc-100 flex items-center border border-zinc-300 rounded-lg">
                <BiSearchAlt className="w-[2.63rem] h-[2.63rem] p-2"/>
                <input type="text" placeholder="Type here..." className="p-2 w-25 bg-transparent outline-none"/>
            </div>

            {/* NOTIFICATION DROPDOWN */}
            <div>
                <IoMdNotifications className="w-5 h-5 hover:block"/>
                <span className="hidden"></span>
            </div>
        </section>
    )
}