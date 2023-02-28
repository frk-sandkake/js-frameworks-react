function Heading({color, fontSize}) {
    const headingStyle = {
        color: color,
        fontSize: fontSize + "px"
    };
    return <h1 style={headingStyle}>Welcome to the voting app</h1>;
}

export default Heading;
