{/* Components imports */}
import Header from "./components/Header"

{/*Hook to navigate in the pages*/}
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
