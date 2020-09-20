import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {
  
const [users,setUsers] = useState([
{name:'Tedy', message:'Hi' },
{name:'Magic', message:'Look at this' },
{name:'Cat', message:'Meeew' },
{name:'Poof', message:'#Gone' }

]);

  return(
    <div className="app">
   {users.map(user =>(
     <Tweet name={user.name} message={user.message}/>
   ))}
   </div>
  );
}

export default App; 