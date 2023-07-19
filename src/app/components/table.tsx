export default function Table() {
    return (
        <div>
            <table>
            <tr className="text-zinc-400 text-[0.6em] border-b">
                <th className="p-2 w-5/12 pl-4 text-left">AUTHOR</th>
                <th className="p-2 w-2/12 pl-4 text-left">FUNCTION</th>
                <th className="p-2 w-3/12"><p>STATUS</p></th>
                <th className="p-2 w-2/12">EMPLOYED</th>
                <th className="p-2 w-1/12"></th>
            </tr>
            <tr className="text-sm border-b">
                <th className="p-4 font-semibold flex flex-col text-left">
                <p>John Michael</p>
                <p className="text-slate-500 font-normal text-xs">john@creative-tim.com</p>
                </th>
                <th className="p-4 font-normal flex-col text-xs text-left">
                <p className="font-medium">Manager</p>
                <p className="text-slate-500">Organization</p>
                </th>
                <th className="p-4 font-normal flex justify-center"><p className="bg-gradient-to-r from-lime-500 to-green-600 rounded-[10px] text-white w-20 h-7 flex justify-center items-center">ONLINE</p></th>
                <th className="p-4 font-medium text-slate-500 text-xs">23/04/18</th>
                <th className="p-4 text-[0.7em] text-zinc-400 font-semibold cursor-pointer">Edit</th>
            </tr>
            <tr className="text-sm border-b">
                <th className="p-4 font-semibold flex flex-col text-left">
                <p>Alexa Liras</p>
                <p className="text-slate-500 font-normal text-xs">alexa@creative-tim.com</p>
                </th>
                <th className="p-4 font-normal flex-col text-xs text-left">
                <p className="font-medium">Programator</p>
                <p className="text-slate-500">Developer</p>
                </th>
                <th className="p-4 font-normal flex justify-center"><p className="bg-gradient-to-r from-slate-400 to-slate-500 rounded-[10px] text-white w-20 h-7 flex justify-center items-center">OFLINE</p></th>
                <th className="p-4 font-medium text-slate-500 text-xs">11/01/19</th>
                <th className="p-4 text-[0.7em] text-zinc-400 font-semibold cursor-pointer">Edit</th>
            </tr>
            <tr className="text-sm border-b text-left">
                <th className="p-4 font-semibold flex flex-col text-left">
                <p>Laurent Perrier</p>
                <p className="text-slate-500 font-normal text-xs">laurent@creative-tim.com</p>
                </th>
                <th className="p-4 font-normal flex-col text-xs">
                <p className="font-medium">Executive</p>
                <p className="text-slate-500">Projects</p>
                </th>
                <th className="p-4 font-normal flex justify-center"><p className="bg-gradient-to-r from-lime-500 to-green-600 rounded-[10px] text-white w-20 h-7 flex justify-center items-center">ONLINE</p></th>
                <th className="p-4 font-medium text-slate-500 text-xs text-center">11/01/19</th>
                <th className="p-4 text-[0.7em] text-zinc-400 font-semibold cursor-pointer">Edit</th>
            </tr>
            </table>
        </div>
    )
}