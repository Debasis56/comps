import Sidebar from "./components/Sidebar"
import Route from "./components/Route"
import AccordionPage from './pages/AccordianPage'
import DropdownPage from './pages/DropdownPage'
import ButtonPage from './pages/ButtonPage'
import ModalPage from "./pages/ModalPage"
import TablePage from "./pages/TablePage"
import CounterPage from "./pages/CounterPage"

function App() {
    // const handleClick = () => {
    //     console.log('Clicked!');
    // }


   
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">

      {/* <Link to = "/accordion">Go to Accordian</Link>
      <Link to = "/dropdown">Go to Dropdown</Link> */}
      <Sidebar />
      <div className="col-span">
        <Route path="/accordion">
          <AccordionPage/>
        </Route>
        <Route path="/">
          <DropdownPage/>
        </Route>
        <Route path="/buttons">
          <ButtonPage/>
        </Route>
        <Route path = "/modal">
          <ModalPage/>
        </Route>
        <Route path = "/modal">
          <ModalPage/>
        </Route> <Route path = "/table">
          <TablePage/>
        </Route>
        <Route path = "/counter">
          <CounterPage initialCount={10}/>

        </Route>
        


      </div>


    </div>
   
  )
}

export default App