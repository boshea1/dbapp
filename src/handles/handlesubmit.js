import { doc,setDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const handleSubmitToDB = (...datas) => {
    const ref = collection(firestore, "test_data") // Firebase creates this automatically
    console.log('datahere',datas[0])
    let data = {
        firstName: datas[0].firstName,
        lastName:  datas[0].lastName,
        userName:  datas[0].userName
    }
    
    try {
         setDoc(doc(ref, `id${datas[0].id}`), data)}
     catch(err) {
        console.log(err)
    }
}
 
export default handleSubmitToDB;