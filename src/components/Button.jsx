import './index.css'

export default function Button({valor}){
  const click = () => {
    // alert("Click "+document.getElementById("nombre").value);
    valor(Number(document.getElementById("numero").value))
  }
  return <>
  <input type="text" id="nombre" />
  <input type="number" id="numero" />
  <button onClick={click}>
    Click
  </button>
  </>
}