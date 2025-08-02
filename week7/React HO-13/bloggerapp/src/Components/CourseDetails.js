import React from 'react';

export function CourseItem(props) {
  var course = props.course;
  return (
    <div style={{ border: '1px solid teal', padding: 8, marginBottom: 4 }}>
      <h4>{course.name}</h4>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
    </div>
  );
}

export function CourseDetails(props) {
  var courses = props.courses;
  var show = props.show;

  return (
    <div>
      <h2 style={{color:"darkblue"}}>Course Details</h2>
      {show === true && (
        <div>
          {courses.length === 0 && <p>No courses available.</p>}
          {courses.map(function(c) {
            return <CourseItem key={c.id} course={c} />;
          })}
        </div>
      )}
      {show === false && <p>Courses are hidden.</p>}
    </div>
  );
}
