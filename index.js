import React, { useState, useEffect, Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


/* componentDidMount()
componenetDidUpdate()
componentWillUnmount() */

function App(){
 const [ name, setName ] = useState("Manas")
 const [ age, setAge ] = useState(20)
 const [ courses, setCourses ] = useState([])

 const changeName = () => {
  setName("Nagesh")
 }

 const changeAge = () => {
  setAge( age + 10 )
 } 

 useEffect( () => {
   console.log("useEffect is been called")
   fetch("http://localhost:3000/courses")
   .then( response => response.json())
   .then( response => {
     setCourses(response)
   })
 }, [name, age])


 return(
  <Fragment>
    <h1>App</h1>
    <h2>Name: { name }</h2>
    <button onClick={ changeName }>Change Name </button>
    
    <h2>Age: { age }</h2>
    <button onClick={ changeAge }>Change Age </button>
    {
      courses.map( course => {
        return <h3>{ course.name }</h3>
      })
    }
  </Fragment>
 )
}

render(<App />, document.getElementById('root'));