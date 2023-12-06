import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ['rubel', 'bappa', 'kuber']
  return (
    <div className="App">
     <Person name={nayoks[0]}></Person>
     <Person name={nayoks[2]}></Person>
     <Person job={nayoks[1]}></Person>
  
    </div>
  );
}

function Person (props){

  console.log(props);
  return(
    <div className="person">
      <h2>Name: {props.name}</h2>
      <p>{props.job}</p>
    </div>
  )
}

export default App;
