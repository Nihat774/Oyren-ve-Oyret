import ScrollToTop from "react-scroll-to-top"
import LayoutComponents from "./Components/Layout/LayoutComponents"
import MyRoutes from "./Components/MyRoutes"
// import CreateAccount from "./pages/CreateAccount"
// import HomePage from "./pages/Home"

function App() {
  return (
    <>
     <LayoutComponents>
      <MyRoutes />
      {/* <HomePage /> */}
      {/* <CreateAccount /> */}
      <ScrollToTop smooth  className="center-flex p-2 "/>
     </LayoutComponents>
    </>
  )
}

export default App
