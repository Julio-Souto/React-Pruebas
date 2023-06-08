import { useState } from "react"
import Button from "./components/Button"
import CounterApp from "./components/CounterApp"
import Header from "./components/Header"
import Parrafo from "./components/Parrafo"
import { data } from "./data"

export default function App(){
  const [incremento, setIncremento] = useState(0)
  return <>
  <div className="h-screen p-4 space-y-4 bg-gray-800 main text-slate-200">
    <Header />
    <h1 id="titulo">Header</h1>
    <Button valor={setIncremento}/>
    <Parrafo nombre={data.nombre} apellidos={data.apelldios} edad={data.edad} />
    <CounterApp value={data.edad} incremento={incremento}/>
    <blockquote className="mt-4" style={{borderLeft:"2px solid cyan",paddingLeft:.5+"em"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente tempore dignissimos dolore similique ratione quisquam obcaecati expedita exercitationem a et ipsam ducimus, adipisci corporis commodi in iure id tenetur labore.</blockquote>
  </div>
  </>
}