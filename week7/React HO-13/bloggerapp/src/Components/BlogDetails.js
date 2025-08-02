import React from 'react';

export function BlogItem(props) {
  var blog = props.blog;
  return (
    <div style={{ border: '1px dashed #666', padding: 8, marginBottom: 4 }}>
      <h4>{blog.title}</h4>
      <p>By: {blog.author}</p>
      <p>{blog.excerpt}</p>
    </div>
  );
}

export function BlogDetails(props) {
  var blogs = props.blogs;
  var filter = props.filter;
  var show = props.show;

  return (
    <div>
      <h2 style={{color:"darkblue"}}>Blog Details</h2>
      {show === false ? (
        <p>The blog section is hidden.</p>
      ) : blogs.length === 0 ? (
        <p>No blogs to show.</p>
      ) : (
        blogs
          .filter(function(b) {
            if (filter === '') {
              return true;
            }
            return b.category === filter;
          })
          .map(function(b) {
            return <BlogItem key={b.id} blog={b} />;
          })
      )}
    </div>
  );
}
