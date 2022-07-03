import React from "react";

const Courses = ({courses}) =>{
    const names = courses.map(course =>
      <div key={course.id}>
       <h1>{course.name}</h1>
       {course.parts.map(index => <p key={index.id}>{index.name} {index.exercises}</p>)}
       <b>total of {course.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)} exercises</b>
      </div>)
     return names
   }
export default Courses