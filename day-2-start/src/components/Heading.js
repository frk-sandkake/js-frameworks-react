function Heading({color, fontSize, name, age}){
  // 1. I want to add a color
  const headingStyle = {
    color: color,
    fontSize : fontSize + "px"
  }
  return (
    <h1 style={headingStyle}>Hello I am {name} and my age is {age}</h1>
  )
}
export default Heading;
