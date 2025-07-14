

interface Props {
    children : string
    color: string
    
}
const Button = ({children, color } : Props) => {
  return (
    <button className={`px-4 py-2 rounded-sm cursor-pointer ${color}  text-white`}>{children}</button>
  )
}

export default Button