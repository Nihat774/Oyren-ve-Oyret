import { Layout } from "../../MyTypes"
import Footer from "../Footer"
import Header from "../Header"

function LayoutComponents({children}:Layout) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LayoutComponents
