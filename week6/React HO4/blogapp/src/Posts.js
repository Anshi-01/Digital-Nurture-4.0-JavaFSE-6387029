import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  //Step 4: Load posts using Fetch API
  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      const posts = data.map(p => new Post(p.id, p.title, p.body));
      this.setState({ posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
      this.setState({ hasError: true });
    }
  };

  //Step 5: componentDidMount lifecycle hook
  componentDidMount() {
    this.loadPosts();
  }

  //Step 6: componentDidCatch lifecycle hook
  componentDidCatch(error, info) {
    alert("Something went wrong: " + error);
    console.error('Error caught in componentDidCatch:', error, info);
  }

  //Step 7: render method
  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h2>Oops! Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <div key={post.id} style={{ marginBottom: "1rem" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
