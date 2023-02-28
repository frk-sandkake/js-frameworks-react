function Paragraph(props) {
  return (
    <p>
      {props.content}
      {props.children}
    </p>
  )
}

export default Paragraph;
