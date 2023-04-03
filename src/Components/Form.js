import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useRef} from 'react';




function MyForm(props) {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const onClear = (id) => {
        ref1.current.value = "";
        ref2.current.value = "";
        ref3.current.value = "";
    }
    
  
  const handleChange1 = (e) => {
      setInput1(e.target.value)
      
  }
  const handleChange2 = (e) => {
    setInput2(e.target.value)
}


const handleChange3 = (e) => {
    setInput3(e.target.value)
}


    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          firstName: input1,
          lastName: input2,
          userName: input3,
        });
          setInput1(''); 
          setInput2('');
          setInput3('');
          e.target.value = ''
      }

      props.handleGet()

      
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="First Name" placeholder="First Name" onChange={handleChange1} ref={ref1}/>
        <Form.Text className="text-muted">
          We'll never share your data with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Second Name</Form.Label>
        <Form.Control type="Second Name" placeholder="Second Name" onChange={handleChange2} ref={ref2}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="Username" placeholder="Username" onChange={handleChange3} ref={ref3}/>
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={() => {onClear()}}>
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;