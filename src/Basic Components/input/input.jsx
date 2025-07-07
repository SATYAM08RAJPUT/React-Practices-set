const Input = ({onchange,className,placeholder}) => {
    return(
        <>
        <input onChange={onchange} className={className} placeholder={placeholder}/>
        </>
    )
}
export default Input