import React, { useState } from 'react';
import { BookDetails } from './Components/BookDetails';
import { BlogDetails } from './Components/BlogDetails';
import { CourseDetails } from './Components/CourseDetails';

function App() {
  var _useState = useState(true);
  var showBooks = _useState[0];        // to change tye value of usestate it from true to false
  var setShowBooks = _useState[1];

  var _useState2 = useState(true);
  var showBlogs = _useState2[0];
  var setShowBlogs = _useState2[1];

  var _useState3 = useState(true);
  var showCourses = _useState3[0];
  var setShowCourses = _useState3[1];

  var _useState4 = useState('');
  var blogFilter = _useState4[0];
  var setBlogFilter = _useState4[1];

  var books = [
    { id: 1, title: 'React in Action', author: 'Mark T.', year: 2018 },
    { id: 2, title: 'Learning React', author: 'Alex B.', year: 2020 }
  ];

  var blogs = [
    { id: 'a', title: 'Understanding JSX', author: 'Jane', excerpt: 'JSX lets you write HTML inside JavaScript.', category: 'React' },
    { id: 'b', title: 'State vs Props', author: 'John', excerpt: 'Props are read-only. State can change.', category: 'Basics' }
  ];

  var courses = [
    { id: 'c1', name: 'Fullstack MERN', instructor: 'Anshika', duration: '8 weeks' },
    { id: 'c2', name: 'Advanced React', instructor: 'Unnati', duration: '4 weeks' }
  ];

  function toggleBooks() {
    setShowBooks(!showBooks);
  }

  function toggleBlogs() {
    setShowBlogs(!showBlogs);
  }

  function toggleCourses() {
    setShowCourses(!showCourses);
  }

  function changeFilter(event) {
    setBlogFilter(event.target.value);
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif'}}>
      <h1 style={{marginBottom: 50, textAlign:"center", color:"darkblue" }}>Blogger App</h1>

      <div style={{ marginBottom: 20 , display:"flex", alignItems:"center", justifyContent:"space-evenly" }}>
        <button onClick={toggleBooks}>
          {showBooks ? 'Hide' : 'Show'} Book Details
        </button>{' '}
        <button onClick={toggleBlogs}>
          {showBlogs ? 'Hide' : 'Show'} Blog Details
        </button>{' '}
        <button onClick={toggleCourses}>
          {showCourses ? 'Hide' : 'Show'} Course Details
        </button>
        <div style={{ marginTop: 8 }}>
          <label>
            Filter blogs by category:{' '}
            <select value={blogFilter} onChange={changeFilter}>
              <option value=''>All</option>
              <option value='React'>React</option>
              <option value='Basics'>Basics</option>
            </select>
          </label>
        </div>
      </div>

      <section style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
        <BookDetails books={books} show={showBooks} />
        <BlogDetails blogs={blogs} filter={blogFilter} show={showBlogs} />
        <CourseDetails courses={courses} show={showCourses} />
      </section>
    </div>
  );
}

export default App;
