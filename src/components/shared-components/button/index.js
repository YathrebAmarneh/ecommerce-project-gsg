
const Button = ({backgroundColor,height,width,padding,buttonContent}) => {
  return (
    <button style={{backgroundColor:{backgroundColor},padding:{padding},width:{width},height:{height}}}>{buttonContent}</button>
  )
}

export default Button