import Sidenav from "../components/asidenav"
import Footer from "../components/footer"
import Header from "../components/header"
import Table from "../components/table"

export default function Tables() {
  return (
    <section className="lg:flex min-h-screen p-5 bg-zinc-100">
      <Header/>
      <Sidenav/>
      <div className="flex lg:w-9/12 lg:right-5 absolute w-full top-24 flex-col bg-white rounded-xl p-5 shadow-lg">
        <Table/>
      </div>
      <Footer/>
    </section>
  )
}