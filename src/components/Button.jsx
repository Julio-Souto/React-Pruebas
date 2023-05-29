import './index.css'

export default function Button(){
  return <>
  <input type="text" id="nombre" />
  <button onClick={click}>
    Click
  </button>
  </>
}

function click(){
  alert("Click "+document.getElementById("nombre").value);
}