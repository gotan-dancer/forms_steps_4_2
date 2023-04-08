import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Steps()
{
    const [steps,setSteps] = useState([
        {date: '20.07.2019', km: 5.7},
        {date: '19.07.2019', km: 14.2},
        {date: '18.07.2019', km: 3.4},
    ]);

    const [form, setForm] = useState({
        date: "01.01.1970",
        km: 0
    });

    const handleFormChange = (event) => {
        const { date, km } = event.target;

        setForm((prevForm) => ({
            ...prevForm,
            [date] : event.target.date,
            [km] : event.target.km
        }));
    }


    const handleAddStep = (event) => {
        event.preventDefault();

        // if (дата - новая)
        // {
        const newStep = { date: form.date, km: form.km} ;

        setSteps((prevStep) => [...prevStep, newStep]);

        setForm({date: '01.01.1970', km: 0});
        // }

        //else (дата уже существует)
        // {
        //    ... (дописать)
        // }
    }

    const handleDelete = (step) => () => {
        setSteps(prevSteps => prevSteps.filter(o => o.date !== step.date))
    }

    return (
        <div>
            <form onSubmit={handleAddStep}>
                <input type="date" name="date" value={form.date} onChange={handleFormChange} />
                <input type="number" name="km" value={form.km} onChange={handleFormChange} />
                <button>Add</button>
            </form>
            <ul>
                {steps
                 // сортировка по дате (дописать)
                 //.sort()
                 .map(step => <li key={step.date}>{step.date} {step.km} 
                                   <button onClick={handleEdit}>Edit</button> 
                                   <button onClick={handleDelete(step)}>Delete</button>
                                   </li>
                          )
                }
            </ul>
        </div>
    );
}

function App() {
  return (
    <div>
        <Steps />      
    </div>
  );
}

export default App;
