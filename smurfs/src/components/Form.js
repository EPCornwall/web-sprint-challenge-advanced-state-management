import React, {useState} from 'react';
import axios from 'axios';

const initialFormValues={
    name: '',
    age: '',
    height:''
}

function Form(props) {
    const handleFormChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const submitForm = (e) =>{
        const newSmurf ={
            name: form.name.trim(),
            age: form.age.trim(),
            height: form.height.trim()
        }
        postNewSmurf(newSmurf)
        setForm(initialFormValues)
    }
    const postNewSmurf = smurf =>{
        axios.post('http://localhost:3333/smurfs', smurf)
        .then(res =>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    const [form, setForm] = useState(initialFormValues)
    return(
        <div>
            <h3>Add a new Smurf</h3>
            <form>
                Name:
            <input 
            name= 'name'
            value={form.name}
            onChange={(e) =>{handleFormChange(e)}}>
            </input>
                Age:
                <input 
            name= 'age'
            value={form.age}
            onChange={(e) =>{handleFormChange(e)}}>
            </input>
                Height:
                <input 
            name= 'height'
            value={form.height}
            onChange={(e) =>{handleFormChange(e)}}>
            </input>
            </form>
            <button onClick={submitForm}>Add</button>
        </div>
    )
}


export default Form;
