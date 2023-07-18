import Sidenav from "../components/asidenav"

export default function Dashboard() {
  return (
    <section className="flex min-h-screen p-5 bg-zinc-100">
      <Sidenav/>
      <div className="flex md:w-9/12 md:absolute md:right-5 w-full justify-center bg-white rounded-xl p-5 shadow-lg">
        World
      </div>
    </section>
  )
}