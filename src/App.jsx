import Button from "./components/Button"
import Header from "./components/Header"
import List from "./components/List"
import Person from "./components/Person"

function App() {
  const onClickFunc = () => {
    alert("Clicked")
  }
  const arr = [
    "This",
    "is",
    "the",
    "unordered",
    "list"
  ]
  return (
    <div className="bg-blue-950 h-screen">
      <Person name={"Kartik"} age={20}/>
      <Button text={"Hi"} onClick={onClickFunc}/>
      <Header title={"This is my title which is rendered inside Header component"}/>
      <List title={arr}/>
    </div>
  )
}

export default App
