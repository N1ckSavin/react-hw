import React, { useState } from 'react';
import './form.css'

function Form() {
    const[form,setForm] = useState({
        name: "",
        surName: "",
        age: "",
        work: ""
    })
    const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
        const {id, value} = e.currentTarget;
        setForm({
            ...form,
            [id]: value
        })
    }
    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        console.log(form)
    }
    return(
    <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <div><input value={form.name} type="text" id='name' onChange={handleForm} /></div>
        </div>
        <div>
            <label htmlFor="surName">Surname:</label>
            <div><input value={form.surName} type="text" id='surName' onChange={handleForm}  /></div>
        </div>
        <div>
            <label htmlFor="age">Age:</label>
           <div> <input value={form.age} type="text" id='age' onChange={handleForm}  /></div>
        </div>
        <div>
            <label htmlFor="work">Place of work</label>
            <div><input value={form.work} type="text" id='work' onChange={handleForm} /></div>
        </div>
        <button className='btn__form'>Take on me pls ;d</button>
        <button className='btn__form' onClick={() => setForm({
            ...form,
            name: "",
            surName: "",
            age: "",
            work: ""
        })}>Clear</button>
    </form>
)   
}
export default Form;