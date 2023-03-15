import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoad, setLoad] = useState(false);



  const getData = async () => {

    try {
      setLoad(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.message)
    }
  }

  useEffect(() => {
    getData();
  }, []);


  if (isLoad) {
    return <h1>Loading ....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }
  console.log(data);

  return (
    <div>
      {data && data.map((d) => {
        return <div key={d.id} className='shadow-2xl my-5'>
          <h1>{d.email}</h1>
          <h1>{d.name}</h1>
          <p>{d.phone}</p>
          <p>{d.address.city}</p>
        </div>
      })}

    </div>
  )
}

export default App