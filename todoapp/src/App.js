import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan';
import axios from 'axios';

const ai = axios.create({
  baseURL : 'https://todoapp-notes-backend.herokuapp.com'
})

const App = () => {

  const [items, setitems] = useState([])
  const [text, settext] = useState('')

  // --------------------------------------------

  useEffect( () => {
    async function getUser() {
      try {
        const response = await ai.get('/api/list/');
        setitems(response.data.todoitems)
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  }, [items])

  // ------------------------------------------
  
  const handlechange = (e) => {
    settext(e.target.value)
  }
  // ------------------------------------------

  const handledelete = (e) => {
    let id = e.target.value
    ai.delete(`/api/destroylist/${id}`)
  }
  
  // ------------------------------------------
  
  const handleadd = (e) => {
    if (text !== ''){
    let data = {items:text}
    ai.post('/api/createlist/', data)
    .then(function (response) {
      // console.log(response);
      settext('')
    })
  }}

  let plan = true;
  if(items.length!==0){
    plan = true
  } else {
    plan = false
  }

  // ------------------------------------------
  
  return (
    <div className='container-fluid my-5'>
      <div className="row">
        <div className="col-sm-6 mx-auto shadow-lg p-3">

          <h2 className='text-center text-white'>Todo App</h2>

           <div className='text-center mt-3'>
                <input type="text" name='text' value={text} onChange={handlechange} className="form-control text-center text-white" placeholder='write todays plan' />
                <button onClick={handleadd} className="btn btn-primary px-5 mt-3">Add</button>
           </div>

           <div className='mt-4'>
            <h2 className='text-center text-white'>
            {plan ? <> <h1>-----Your Plans-----</h1> <h2>&#128512;</h2> </>  : <> <h1>-----No Plans-----</h1> <h2>&#128577;</h2> </>}
            </h2>
            <div>

            <ul className="list-group mt-4">

            {
              items.map( (element,i) => {
              return <Plan key={i} value={element.items} index={i} id={element.id} clickhandle={handledelete} />
              } )
            }

            </ul>
                
            </div>
           </div>

        </div>
      </div>
    </div>
  )
}

export default App
