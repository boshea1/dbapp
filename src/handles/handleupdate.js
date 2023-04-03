import { firestore } from "../firebase_setup/firebase";
import { doc, updateDoc } from "firebase/firestore";

const handleUpdate = async(ip1,ip2,ip3, id) => {

    const Ref = doc(firestore, 'test_data', id)
    await updateDoc(Ref,{firstName:ip1,lastName:ip2,userName:ip3})

console.log(ip1,ip2,ip3,id)
 }
export default handleUpdate;



 