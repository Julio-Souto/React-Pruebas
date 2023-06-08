
function ButtonClick({text,click}) {
  return (
    <>
      <button className="transition duration-200 ease-in-out rounded-lg bg-slate-300 hover:bg-slate-500" onClick={click}>{text}</button>
    </>
  )
}

export default ButtonClick