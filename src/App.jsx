import './App.css'
import Button from './Basic Components/Button/button'
import Form from './Basic Components/Form/form'
import Input from './Basic Components/input/input'
import Counter from './Counter/counter'
function App() {
  return (
    <>
     <h3>Welcome to React</h3>
     <Button>{"click me"}</Button>
     <Input placeholder={"search a Name"} className={"inputfield"} />
    <Form />
    <Counter />
    </>
  )
}

export default App
