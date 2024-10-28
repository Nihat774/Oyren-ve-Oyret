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
     </LayoutComponents>
    </>
  )
}

export default App
