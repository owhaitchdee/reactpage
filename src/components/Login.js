// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import CloseButton from 'react-bootstrap/CloseButton';
// import axios from 'axios';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import FormGroup from 'react-bootstrap/FormGroup';
// import Component from 'react-components';
// import {useEffect, useState} from 'react';

// class LoginForm extends React.Component {
//     constructor(props){
//       super(props);
//       this.state = { 
//         email: null, 
//         password: null,
//         errors: {
//           email: '',
//           password: '',
//           login: '', 
//         },
//       };
//     }
//     handleChange = (event) => {
//       this.setState({ [event.target.name]: event.target.value });
//     }
//     handleSubmit = async (event) => {
//       event.preventDefault();
      
//       const { name, value } = event.target;
      
//       let form_email = this.state.email, 
//           form_password = this.state.password,
//           form_errors = this.state.errors;
      
//       let has_errors = false;
      
//       if(form_email == null || form_email.length == 0){
//         form_errors.email = "Email field cannot be empty";
//         has_errors = true;
//       }else{
//         // Regex control
//         if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(form_email)){
//           form_errors.email = "Please enter a valid email";
//           has_errors = true;
//         }else{
//           form_errors.email = "";
//         }
//       }
      
//       if(form_password == null || form_password.length == 0){
//         form_errors.password = "Password field cannot be empty";
//         has_errors = true;
//       }else{
//         form_errors.password = "";
//       }
      
//       if(!has_errors){
        
//         // Success submit, now validate e-mail adress with axios
//         let allUsers = [];
        
//         await axios.get('http://localhost/sat-app/db.php')
//         .then(resp => {
//           console.log(resp.data);
          
//           allUsers = resp.data;
          
//           let validUser = false;
          
//           Object.keys(allUsers).forEach(key => {
//             if(allUsers[key].email == form_email + allUsers[key].password == form_password){
//               validUser = true;
//             }
//           });
          
//           if(validUser){
//             console.log("success login");
//             alert("You have successfully logged in");
//             form_errors.login = "";
//           }else{
//             form_errors.login = "Invalid username or password.";
//           }
        
//         })
//         .catch(err => {
//           console.error(err);
//           return null;
//         });
        
//       }
      
//       this.setState({form_errors, [name]: value})
//       const [show, setShow] = useState(false);
//       const handleClose = () => setShow(false);
//       const handleShow = () => setShow(true);
//     }
//     render() {
      
//       let email_err = this.state.errors.email ? this.state.errors.email : '';
//       let password_err = this.state.errors.password ? this.state.errors.password : '';
//       let login_err = this.state.errors.login ? this.state.errors.login : '';
      
//       let email_err_class = this.state.errors.email || this.state.errors.login ? 'form-control mb-1 is-invalid' : 'form-control mb-1';
//       let password_err_class = this.state.errors.password || this.state.errors.login ? 'form-control mb-1 is-invalid' : 'form-control mb-1';
      
//     return ( // className={}}
//     <>
//     <div className="float-end">
//         <span style={{padding:'5px'}}></span>
//         <Button className='btn btn-primary' onClick={handleShow}>Log In
//         </Button>        
//     </div>

//         <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         style={{opacity:'95%', padding:'20px', }}>
//         <Modal.Header>
//             <Modal.Title>Log In</Modal.Title>
//                 <div className="bg-dark p-3">
//                 <CloseButton variant="white"  onClick={handleClose}/>
//                 </div>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form id="loginform" onSubmit={this.handleSubmit}>
//                     <FormGroup controlId="login">
//                         <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" style={{color:"black"}}>
//                             <Form.Control type="email" class="form-control" id="email" name="email" placeholder="tomsmith@email.com"  onChange={this.handleChange} className = {email_err_class} />
//                         </FloatingLabel>
//                         <div class="invalid-feedback mb-2">{email_err}</div>
//                         <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3" style={{color:"black"}}>
//                             <Form.Control type="password" class="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange} className={password_err_class}/>
//                         </FloatingLabel>
//                         <div class="invalid-feedback mb-2">{password_err}</div>
//                         <center>
//                     <Button as="input" type="submit" id="submit" variant="primary">Login</Button>
//                     </center>
//                     </FormGroup>
//                 </Form>
//                 <div class="text-danger mt-2">{login_err}</div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
// }

// ReactDOM.render(<LoginForm />, document.getElementById('container'));