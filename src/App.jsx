

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

import { Suspense } from "react";
import Countries from "./components/Countries/Countries";
const fetchCountries =fetch("https://openapi.programming-hero.com/api/all")

.then(res=>res.json())

console.log(fetchCountries);


// practise link :https://github.com/abujakariacse/react-core-concept-conceptual


function App() {


// const fetchUsers = fetchFriends();
 return (
   <>
     <h2>hello</h2>

     <Suspense fallback={<h2>Countries are loading...</h2>}>
       <Countries fetchCountries={fetchCountries}></Countries>
     </Suspense>
   </>
 );
}



export default App;
