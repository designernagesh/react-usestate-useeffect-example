import React, { useState, useEffect, Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios'

/* componentDidMount()
componenetDidUpdate()
componentWillUnmount() */

function App(){
  const [ name, setName ] = useState("Manas")
  const [ age, setAge ] = useState(20)
  const [ courses, setCourses ] = useState([])
  const [ posts, setPosts ] = useState([])

  const changeName = () => {
    setName("Nagesh")
  }

  const changeAge = () => {
    setAge( age + 10 )
  } 

  /* Using Fetch Method
   useEffect(() => {
   fetch("http://localhost:3000/courses")
   .then( response => response.json())
   .then( response => {
     setCourses(response)
   })
  }, [name]) */


  /* Using Axios Method
  useEffect(() => {
    console.log("useEffect is been called")
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then( res => {
      setPosts(res.data)
    })
  }, [name]) */


  /* Using Axios Async and Await Method */
  useEffect( () => {
    console.log("useEffect is been called")
    data()
  }, [])
  
  const data = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
                      .catch(error => console.log(error))
    setPosts(res.data)
  }

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

      {
        posts.map( post => {
          return <p>{ post.title }</p>
        })
      }
    </Fragment>
 )
}

render(<App />, document.getElementById('root'));