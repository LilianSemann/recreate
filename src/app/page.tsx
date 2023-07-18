import Sidenav from "./components/asidenav"
import Header from "./components/header"

export default function Home() {
  return (
    <section className="lg:flex min-h-screen p-5 bg-zinc-100">
      <Header/>
      <Sidenav/>
      <div className="flex lg:w-9/12 lg:right-5 lg:absolute w-full top-24 justify-center bg-white rounded-xl p-5 shadow-lg">
        Palmeiras não tem mundial!
      </div>
    </section>
  )
}