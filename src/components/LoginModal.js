import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function LoginModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState();
  const [pword, setPword] = useState();
  const [db, setDb] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
      const url = 'http://localhost/sat-app/db.php'
      axios.get(url).then((response)=>{
          setDb(response.data);
          db.map((val)=>{
              return(
              console.log(val.username, val.password)
            )
          })
      })
  },[])

  const submitBtn = function(e){
      e.preventDefault();
      console.log(document.getElementById('username').value);
      console.log(document.getElementById('pword').value);

      let getData = new FormData();
      // getData.append('fname', fname);
      // getData.append('lname', lname);
      // getData.append('birthdate', birthdate);
      // getData.append('email', email);
      getData.append('username', username);
      getData.append('pword', pword);
      // getData.append('function', 'insert'); 
      
      axios({
          method: 'POST',
          url: 'http://localhost/sat-app/db.php',
          data: getData,
          config: 'Content-Type="multipart/form-data"'
      }).then(function(){
          const url = 'http://localhost/sat-app/db.php'
          axios.get(url).then((response) =>{
          setDb(response.data);
          db.map((val)=>{
            if ((val.username) == (document.getElementById('username').value) && (val.password) == (document.getElementById('pword').value)) {
              return(
                  alert('Welcome, ' + val.username + '! You have successfully logged in'),
                navigate ('/home')
              )
            }
          })
          })
      })
      // .catch(function(error){
      //     alert ("Error checking");
      //     console.log(error);
      // });
    }
    
  return (
    <>
    <div className="float-center">
        <span style={{padding:'5px'}}></span>
        <Button className='btn btn-primary' onClick={handleShow}>Log In
        </Button>        
    </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{opacity:'95%', padding:'20px', }}>
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
          <div className="bg-dark p-3">
      <CloseButton variant="white"  onClick={handleClose}/>
    </div>
        </Modal.Header>
        <Modal.Body>
          <Form id="login" action="">
              <FloatingLabel controlId="floatingInput" label="Username" className="mb-3" style={{color:"black"}}>
              <Form.Control type="text" className="form-control" id="username" name="username" placeholder="Tom"  value={username} onChange = {(e) => setUsername(e.target.value)}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Password" className="mb-3" style={{color:"black"}}>
                  <Form.Control type="password" class="form-control" id="pword" name="pword" placeholder="Smith"  value={pword} onChange = {(e) => setPword(e.target.value)}/>
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

export default LoginModal;  