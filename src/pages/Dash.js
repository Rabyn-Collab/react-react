import React from 'react'

const Dash = () => {
  const data = [
    {
      "id": 4,
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "id": 5,
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    }];


  return (
    <div>

      {data.map((d) => {
        return <div key={d.id}>
          <h1>{d.email}</h1>
          <p>{d.body}</p>
        </div>
      })}

    </div>
  )
}

export default Dash