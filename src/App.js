import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Tools from './Tools';
import UserTitle from './UserTitle';
function App() {
  return (
    <div className="App">
      
   
    
      <UserTitle Name={"Sachin"} Speaking={false}></UserTitle>
    <UserTitle Name={"Sagar"} Speaking={true}></UserTitle>
    <UserTitle Name={"Adam"} Speaking={false}></UserTitle>
     <UserTitle Name={"John"} Speaking={true}></UserTitle>
     <UserTitle Name={"Jay"} Speaking={false}></UserTitle>
    <UserTitle Name={"Matt"} Speaking={true}></UserTitle>
    <UserTitle Name={"Patrick"} Speaking={false}></UserTitle>
     <UserTitle Name={"Sachin"} Speaking={true}></UserTitle>
     <UserTitle Name={"Sachin"} Speaking={false}></UserTitle>
     <UserTitle Name={"Chris"} Speaking={false}></UserTitle>
     <UserTitle Name={"Austin"} Speaking={true}></UserTitle>
     <UserTitle Name={"Arno"} Speaking={false}></UserTitle>
    

     </div>
  );
}

export default App;
