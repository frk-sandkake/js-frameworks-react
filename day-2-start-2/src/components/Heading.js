function Heading({color, fontSize, name, age}) {
  const headingStyle = {
    color: color,
    fontSize: fontSize + "px"
  };
  return <h1 style={headingStyle}>Hello I am {name}, {age} years</h1>;
}

export default Heading;
