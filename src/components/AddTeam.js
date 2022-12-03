import {useEffect, useState} from 'react';
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddTeam(){
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

    const submitBtn = function(){
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
            alert ("Error displaying");
            console.log(error);
        });
    }

    return(
        <div>
            <h1>Students' List</h1>
            <div class='container p-3' style={{width:"500px"}}>
                <form>
                    <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                    <Form.Control type="text" class="form-control" id="fname" name="fname" placeholder="Tom"  value={fname} onChange = {(e) => setFname(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                        <Form.Control type="text" class="form-control" id="lname" name="lname" placeholder="Smith"  value={lname} onChange = {(e) => setLname(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
                        <Form.Control type="number" class="form-control" id="age" name="age" placeholder="0"  value={age} onChange = {(e) => setAge(e.target.value)}/>
                    </FloatingLabel>
                    <center>
                    <Button as="input" type="submit" onClick={submitBtn} variant="dark" />{' '}
                    </center>
                </form>
            </div>
        </div>
    )
}

export default AddTeam;