import handleDel from "./handledel"
import handleUpdate from './handleupdate'
import {useState} from 'react'

const HandleGet = (props) => {
  const [edit,setEdit] = useState({id:null,firstName:'',lastName:'',userName:''})
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);
  const s = props.datum
  const getId = (data) => {
    handleDel(data).then(()=> window.location.reload())
  console.log('working', data)
 }

 const submitUpdate =(data) => {
  const num = data.id
  const fun = data.firstName.stringValue
  const lun = data.lastName.stringValue
  const uun = data.userName.stringValue
    setEdit({id:num,firstName:fun,lastName:lun,userName:uun})
  }

 
  
  const handleUpdate2 = async(id) => {
    console.log(input1)
    console.log(input2)
    console.log(input3)
    console.log(id)
    handleUpdate(input1,input2,input3,id).then(()=> window.location.reload())
    setEdit({id:null,firstName:'',lastName:'',userName:''})
 }

 if (edit.id){
  return (
    <tr key={edit.id}>
        <td>{edit.id}</td>
        <td><input type="text" defaultValue={edit.firstName} onChange={(e) => setInput1(e.target.value)}/></td>
        <td><input type="text" defaultValue={edit.lastName} onChange={(e) => setInput2(e.target.value)}/></td>
        <td><input type="text" defaultValue={edit.userName} onChange={(e) => setInput3(e.target.value)}/></td>
        <td><input type="button" value="Update Row" onClick={() => handleUpdate2(edit.id)}/></td>
        <td><input type="button" value="Delete Row" /></td>
        </tr>
  )
}

     return (<>
      {s.map((data)=>{
        return <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.firstName.stringValue}</td>
        <td>{data.lastName.stringValue}</td>
        <td>{data.userName.stringValue}</td>
        <td><input type="button" value="Update Row" onClick={() => {submitUpdate(data)}}/></td>
        <td><input type="button" value="Delete Row" onClick={() => {getId(data.id)}}/></td>
        </tr>
      })}
      </>
      )
     

      
       
   
}


export default HandleGet