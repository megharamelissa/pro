import react from "react"

const Greet = (props) => {
console.log(props)    
return (
    <div>
         <h1>Hello vshwas{props.name} a.k.a {props.heroName}</h1>
         {props.children}
    </div>


)
}
export default Greet;