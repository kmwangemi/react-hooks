import { useEffect, useState } from "react"

const CounterFunction = () => {
   const [state, setState] = useState({
      counter: 0,
      username: ''
   });

   useEffect(() => {
      console.log("useEffect executed");
   }, [])

   const handleOnClick = () => {
      setState(prevState => ({
         ...prevState,
         counter: prevState.counter + 1
      }))
   }

   const handleOnChange = event => {
      const value = event.target.value;
      setState(prevState => ({
         ...prevState,
         username: value
      }))
   }


   return (
      <div>
         <p>Counter value is: {state.counter}</p>
         <button onClick={handleOnClick}>Increment</button>
         <br />
         <br />
         Name{" "}
         <input 
            type="text" 
            name="username"
            value={state.username}
            placeholder="Enter your name"
            autoComplete="off"
            onChange={handleOnChange}
         />
         <br />
         {state.username}
      </div>
   )
}

export default CounterFunction
