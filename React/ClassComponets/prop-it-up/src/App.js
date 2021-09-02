import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';
let peopleArr = [
  {"firstName":"Jane", "lastName":"Doe", "age": 45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith", "age": 88, "hairColor":"Brown"},
  {"firstName":"Fiilmore", "lastName":"Millard", "age": 50, "hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith", "age": 62, "hairColor":"Brown"}
]

function App() {
  return (
    <div className="App">
      {peopleArr.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}></PersonCard>
        })
      }
    </div>
  );
}

export default App;
