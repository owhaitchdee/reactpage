import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import {useEffect, useState} from 'react';
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ModalForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [age, setAge] = useState();
  const [students, setStudents] = useState([]);

  useEffect(()=>{
      const url = 'http://localhost/sat-app/db.php';
      axios.get(url).then((response)=>{
          setStudents(response.data);
          // console.log(students);
      });
  },[]);

  const submitBtn = function(e){
      let getData = new FormData();
      getData.append('fname', fname);
      getData.append('lname', lname);
      getData.append('age', age);
      getData.append('function', 'insert'); 
      
      axios({
          method: 'POST',
          url: 'http://localhost/sat-app/db.php',
          data: getData,
          config: 'Content-Type="multipart/form-data"'
      }).then(function (result){
          const url = 'http://localhost/sat-app/db.php';
          axios.get(url).then((response)=>{
              setStudents(response.data);
          console.log(students);
          });
      }).catch(function(error){
          alert ("Error posting");
          console.log(error);
      });
    }
    
  return (
    <>
    <div className="float-center">
        <span style={{padding:'5px'}}></span>
        <Button className='btn btn-primary' onClick={handleShow}>Add Member
        </Button>        
    </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{opacity:'95%', padding:'20px', }}>
        <Modal.Header>
          <Modal.Title>Add Member</Modal.Title>
          <div className="bg-dark p-3">
      <CloseButton variant="white"  onClick={handleClose}/>
    </div>
        </Modal.Header>
        <Modal.Body>
          <Form id="addmember" action="">
              <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3" style={{color:"black"}}>
              <Form.Control type="text" className="form-control" id="fname" name="fname" placeholder="Tom"  value={fname} onChange = {(e) => setFname(e.target.value)}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" style={{color:"black"}}>
                  <Form.Control type="text" class="form-control" id="lname" name="lname" placeholder="Smith"  value={lname} onChange = {(e) => setLname(e.target.value)}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Age" className="mb-3" style={{color:"black"}}>
                  <Form.Control type="number" class="form-control" id="age" name="age" placeholder="0"  value={age} onChange = {(e) => setAge(e.target.value)}/>
              </FloatingLabel>
              <center>
              {/* <Button as="input" type="reset" onClick={clearForm} variant="primary2" />{' '} */}
              <Button as="input" type="submit" onClick={submitBtn} variant="primary" />{' '}
              </center>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;