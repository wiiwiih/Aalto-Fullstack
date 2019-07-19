import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <h1>
          {props.text}
      </h1>
    )
  }

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({parts}) => (parts.map(part => <Part key={part.id} part={part} />))

const Total = ({parts}) => {
  const sum = parts.reduce( (total, part) => total + part.exercises, 0)

  return (
    <p>
      <strong>
        Number of exercises {sum}
      </strong>
    </p>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
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
      },
      {
        name: 'Map',
        exercises: 9,
        id: 4
      },
      {
        name: 'Reduce',
        exercises: 5,
        id: 5
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
