import './App.css'
import UsersTable from './component/UsersTable'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './component/NavBar';


function App() {
  

  return (
    <div className="App">
      <NavBar />
      <UsersTable />
    </div>
  )
}

export default App
