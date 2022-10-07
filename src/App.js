import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Leo";
  let variable = "";
  if(name === "Leo"){
    variable = (<p>this is Leo</p>);
  }
  let nameString = name === "Leo" ? "this is Leo" : "this is not Leo"

  const buttonClick = () => {
    console.log("Button clicked");
  }
  const onInputChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  }
  const lizzie = {
    name: "lizzie",
    age: 21,
    major: "geography",
    star_sign: "leo"
  }
  const divya = {
    name: "divya",
    age: 21,
    major: "computer science",
    star_sign: "gemini"
  }
  const myFriends = [lizzie, divya];
  const friendMap = myFriends.map((friend) => {
    return(
      <div className = "friend">

        <h1>{friend.name}</h1>
        <p>
        {friend.name} is {friend.age} years old.
        She is a {friend.major} major.
        Her star sign is {friend.star_sign}
        </p>
      </div>
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {friendMap}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="friend-container">
          {friendMap}
        </div>
        <button onClick={buttonClick}>Click me</button>
        <input type="text" onChange={onInputChange} />
      </header>
    </div>
  );
}

export default App;
