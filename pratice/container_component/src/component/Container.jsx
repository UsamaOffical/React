

function Container(props) {
  return (
    <div className="w-[90%] lg:w-[83%] mx-auto p-4">
      {props.children}
    </div>
  )
}

export default Container
