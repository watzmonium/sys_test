import './Problem.css'

interface ProblemData {
  id: number;
  name: string;
  url: string;
}

interface props {
  problemData: Array<ProblemData>;
}

const Problem = (props: props) => {
  return (
    <div>

      {props.problemData.map((problem: ProblemData) => {
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