import Sidenav from "../components/asidenav"
import Footer from "../components/footer"
import Header from "../components/header"
import Table from "../components/table"

export default function Tables() {
  return (
    <section className="shrink overflow-auto lg:flex min-h-screen p-5 bg-zinc-100">
      <Header/>
      <Sidenav/>
      <div className="flex lg:w-9/12 lg:right-5 absolute w-full top-24 flex-col bg-white rounded-xl p-5 shadow-lg">
        <h1 className="font-semibold p-4">Authors Table</h1>
        <Table/>
      </div>
      <Footer/>
    </section>
  )
}