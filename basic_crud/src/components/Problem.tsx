const Problem = ({problemData}) => {
  return (
    <div>

      {problemData.map((problem) => {
        return(
          <div className="problem" key={problem.id}>
            <p>name: {problem.name}</p>
            <p>url: {problem.url}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default Problem