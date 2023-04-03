import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTable from './Components/Table'
import MyForm from './Components/Form'
import React,{ useState} from 'react'
import handleSubmitToDB from './handles/handlesubmit';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase_setup/firebase";



function App() {
  const [datum,setDatum] = useState([])
  const addData = data => {
    if (!data.firstName || /^\s*$/.test(data.firstName)) {
      return;
    }
    handleSubmitToDB(data)
    const newDatum = [data, ...datum];

    setDatum(newDatum);
  };

  const handleget = async() => {
    const querySnapshot =  await getDocs(collection(firestore, "test_data"))
    const x = []
    for (var i in querySnapshot.docs){
                querySnapshot.docs[i]._document.data.value.mapValue.fields.id= querySnapshot.docs[i].id
                x.push(querySnapshot.docs[i]._document.data.value.mapValue.fields)
              } 
              return x
              
          }
          
          

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Table</h1>
      <div className='containerForm'>
      <MyForm onSubmit={addData} handleGet={handleget}/>
      </div>
      <MyTable datum={handleget()}/>
    </div>
  );
}

export default App;
