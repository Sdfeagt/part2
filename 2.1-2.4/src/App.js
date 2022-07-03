const Course = ({course}) =>{
 const sum = course.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0);
console.log(sum);
return (
  <div>
  <h1>{course.name}</h1>
  <ul>
  {course.parts.map(index => <li key={index.id}>{index.name} {index.exercises}</li>)}
  </ul>
  <b>total of {sum} exercises</b>
  </div>
)
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
  ]
  }

  return <Course course={course} />
}

export default App