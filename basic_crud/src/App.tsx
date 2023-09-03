import { useEffect, useState } from 'react';

import './App.css'
import problemService from './services/problemService';
import Problem from './components/Problem';

function App() {
  const [allProblems, setAllProblems] = useState()

  useEffect(() => {
    const fetchProblems = async() => {
      const problems = await problemService.getAllProblems()
      setAllProblems(problems)
    }
    fetchProblems()
  }, [])


  return (
    <div className='app'>
      <h1>Problems:</h1>
      {allProblems && <Problem problemData={allProblems} />}
    </div>
  )

}

export default App
