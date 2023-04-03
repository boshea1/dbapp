import Table from 'react-bootstrap/Table';
import HandleGet from '../handles/handleget';
import { useState} from 'react';




function MyTable(props) {
  const [coma, setComa] = useState([])

async function get(){ 
  const haveit = await props.datum
  return haveit
}

get().then(async data =>{
  const x = await data
  setComa(x)
})

  return (<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th></th>
          <th></th>

        </tr>
      </thead>
      <tbody>
      <HandleGet datum={coma}/>
      </tbody>
    </Table>
  </>
  );
}


export default MyTable;