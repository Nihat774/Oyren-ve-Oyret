import CopyRight from "../../../ui/CopyRight"
import { Layout } from "../../MyTypes"
import Footer from "../Footer"
import Header from "../Header"

function LayoutComponents({children}:Layout) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CopyRight />
    </>
  )
}

export default LayoutComponents
