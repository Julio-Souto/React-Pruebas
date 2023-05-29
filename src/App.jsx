import Button from "./components/Button"
import CounterApp from "./components/CounterApp"
import Header from "./components/Header"
import Parrafo from "./components/Parrafo"
import { data } from "./data"

export default function App(){
  return <>
  <div className="main">
    <Header />
    <h1 id="titulo">Header</h1>
    <Button />
    <Parrafo nombre={data.nombre} apellidos={data.apelldios} edad={data.edad} />
    <CounterApp value={data.edad} />
    <blockquote style={{borderLeft:"2px solid cyan",paddingLeft:.5+"em"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente tempore dignissimos dolore similique ratione quisquam obcaecati expedita exercitationem a et ipsam ducimus, adipisci corporis commodi in iure id tenetur labore.</blockquote>
  </div>
  </>
}