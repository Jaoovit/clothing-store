{/* Components imports */}
import Header from "./components/Header"

{/*Hook to navigate in the pages*/}
import { Outlet } from 'react-router-dom'

{/*Redux hooks*/}
import { Provider } from "react-redux"
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
     </div>  
    </Provider>
    
  )
}

export default App
