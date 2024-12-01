import { Layout } from "../../MyTypes"
import Footer from "../Footer"
import Header from "../Header"

function LayoutComponents({ children }: Layout) {
  return (
    <div className="flex flex-col h-full ">
      <Header />
      <main className="flex-[8]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LayoutComponents
