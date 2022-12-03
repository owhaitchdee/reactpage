import {useEffect,useState} from 'react';
import axios from 'axios';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ModalForm from './Modal'

function Student(){
    // const [fname, setFname] = useState();
    // const [lname, setLname] = useState();
    // const [age, setAge] = useState();
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const url = 'http://localhost/sat-app/db.php';
        axios.get(url).then((response)=>{
            setStudents(response.data);
            // console.log(students);
        });
    },[]);

    // const submitBtn = function(){
    //     let getData = new FormData();
    //     getData.append('fname', fname);
    //     getData.append('lname', lname);
    //     getData.append('age', age);
    //     getData.append('function', 'insert');
        
    //     axios({
    //         method: 'POST',
    //         url: 'http://localhost/sat-app/db.php',
    //         data: getData,
    //         config: 'Content-Type="multipart/form-data"'
    //     }).then(function (result){
    //         const url = 'http://localhost/sat-app/db.php';
    //         axios.get(url).then((response)=>{
    //             setStudents(response.data);
    //         console.log(students);
    //         });
    //     }).catch(function(error){
    //         alert ("Error displaying");
    //         console.log(error);
    //     });
    // }

    const delBtn = function(e){
        // alert (e.currentTarget.id);
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('function', 'delete');
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
            })
        }).catch(function(error){
            alert ("Error deleting");
            console.log(error);
        });
    }

    const upBtn = function(e){
    
        let getData = new FormData();
        getData.append('id',e.currentTarget.title);
        getData.append('fname',document.getElementById('fname'+e.currentTarget.title).value);
        getData.append('lname',document.getElementById('lname'+e.currentTarget.title).value);
        getData.append('age',document.getElementById('age'+e.currentTarget.title).value);
        getData.append('function','update');
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
            })
        }).catch(function(error){
            alert ("Error deleting");
            console.log(error);
        });
    }

    return(
        <Container style={{color: 'white', textAlign: 'center', padding: '3% 4%'}}>
            <h3> Members List</h3>
            {['Dark'].map((variant) => (
                <Card key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: 'auto', backgroundColor:'black', opacity:'80%', padding:'20px', }} className="mt-4">                   
            <Table bordered hover responsive w-auto style={{color:"white"}}>
                <thead>
                    <tr>
                        <th style={{textAlign:'center',verticalAlign:'middle'}}>Student ID</th>
                        <th style={{textAlign:'center',verticalAlign:'middle'}}>First Name</th>
                        <th style={{textAlign:'center',verticalAlign:'middle'}}>Last Name</th>
                        <th style={{textAlign:'center',verticalAlign:'middle'}}>Age</th>
                        <th style={{textAlign:'center',verticalAlign:'middle'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((val)=>{
                        return(
                            <tr key={val.id}>
                                <td style={{textAlign:'center'}}>{val.id}</td>
                                <td><input defaultValue={val.firstname} id={'fname'+val.id}/></td>
                                <td><input defaultValue={val.lastname} id={'lname'+val.id}/></td>
                                <td style={{textAlign:'center'}}><input defaultValue={val.age} id={'age'+val.id}/></td>
                                <td style={{textAlign:'center'}}>
                                <div className="form-group inline" style={{display:'flex'}}>
                                <Button as="input" id={val.id} onClick={delBtn} variant="danger" size="sm" value='Delete' style={{width:"80px",height:"30px",margin:"0px 10px"}}/>
                                <Button as="input" title={val.id} onClick={upBtn} variant="warning" size="sm" value='Update' style={{width:"80px",height:"30px"}}/>
                                </div></td>
                            </tr>
                    )})}
                </tbody>
            </Table>
            <ModalForm/>
            </Card>
             ))}
        </Container>
    )
}

export default Student;