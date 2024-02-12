import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { User } from './User';

import './App.css'

function Blog() {
  return (
    <div className='container'>
      <div>
        <img src="https://jetpunk.b-cdn.net/img/user-photo-library/e7/e7a4b59036-450.png" alt="logo" id='brandLogo' />
      </div>
      <h2>Blog Post Title</h2>
      <div>
        <p>
          Of be talent me answer do relied. Mistress in on so laughing throwing endeavor occasion welcomed. Gravity sir brandon calling can. No years do widow house delay stand. Prospect six kindness use steepest new ask. High gone kind calm call as ever is. Introduced melancholy estimating motionless on up as do. Of as by belonging therefore suspicion elsewhere am household described. Domestic suitable bachelor for landlord fat.

          To they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy. Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy. Considered imprudence of he friendship boisterous.
        </p>
      </div>
    </div>
  )
}




function App() {
  const [comments, setComments] = useState([] as User[]);
  const [errorMessage, setErrorMessage] = useState('');

  async function load() {
    try {
      const response = await fetch('http://localhost:3000/api/comments');
      if (!response.ok) {
        setErrorMessage('Download error')
      }
      const content = await response.json() as User[];
      setComments(content);
    }

    catch {
      setErrorMessage('Download error')
    }
  }

  useEffect(() => {
    load();
  }, [])
  console.log(comments)

  return (
    <div className='container-fluid' >

      <Blog></Blog>
      <h3>
        Comments
      </h3>
      <table>
        <tbody>
          {
            comments.map((comment: User) => (
              <tr key={comment.id}>
                <td><img src={comment.avatar} alt="" /></td>
                <td><p>{comment.email}</p>
                  <p>{comment.content}</p></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
























