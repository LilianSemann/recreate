import Sidenav from "./components/asidenav"
import Footer from "./components/footer"
import Header from "./components/header"

export default function Home() {
  return (
    <section className="lg:flex min-h-screen p-5 bg-zinc-100">
      <Header/>
      <Sidenav/>
      <div className="flex lg:w-9/12 lg:right-5 absolute w-full top-24 justify-center flex-col bg-white rounded-xl p-5 shadow-lg">
        <p>HOME</p>
      </div>
      <Footer/>
    </section>
  )
}