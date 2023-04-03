import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
 
const handleDel = async(id) => {
//     const ref = doc(firestore, "test_data") // Firebase creates this automatically
    
    try {
            await deleteDoc(doc(firestore, "test_data", id)); }
     catch(err) {
        console.log(err)
    }
}
 
export default handleDel;