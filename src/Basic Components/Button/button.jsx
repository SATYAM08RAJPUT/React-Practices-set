import "./button.css"
const Button = ({onclick,children}) => {
    return(
        <>
        <button className="btn" onClick={onclick} >{children}</button>
        </>
    )
}
export default Button;