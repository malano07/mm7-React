
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Navbar from './componentes/Navbar/Navbar'



function App() {
  
  return (

    <div className='mainbody'>

    <Navbar/>
    <ItemListContainer greeting="MM7 - Tienda Urbana" className='itemcont' />


    </div>
    
    

    
    

   
    
    
  )
}

export default App
