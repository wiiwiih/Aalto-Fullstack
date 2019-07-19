import React from 'react'

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

const Courses = ({courses}) => (courses.map(course => <Course key={course.name} course={course} />))


export default Courses