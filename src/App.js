import React, { useState} from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState(data)
  function submitHandler(e) {
    e.preventDefault()
    let amount = parseInt(count)
    if (count > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }
  return (
    <section className='section-center'>
      <form onSubmit={submitHandler} >
        <h3>I am tired of boring Lorem Ipsum</h3>
        <label htmlFor='amount'>Paragraphs</label>
        <input type="number" name="" id="amount" defaultValue={count} onChange={(e) => setCount(e.target.value)} min='0' />
        <button type='submit' className='btn' >Generate</button>
      </form>
      <article className='lorem-text'>
        <div >{
          text.map(
            (p, index) => {
              return (
                <p key={index}>{p} </p>
              )
            }
          )
        }</div>
      </article>
    </section>
  )
}
export default App;
