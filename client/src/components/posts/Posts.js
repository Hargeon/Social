import React from 'react'
import Post from './Post'
import AddPost from './AddPost'

class Posts extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data.map(element => {
            return ({
              id: element.id,
              description: element.description,
            })
          })
        })
      })
  }

  addNewList(description) {
    data = {
      post: {
        description: description
      }
    }

    fetch(
      'http://localhost:3000/api/v1/posts',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    ).then(response => response.json())
     .then(dataResponse => {
      this.setState(prev => {
        prev.push(dataResponse)
        return (
          {
            posts: prev
          }
        )
      })
     })
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post key={post.id} description={post.description} id={post.id} />
      )
    })

    return (
      <div>
        <AddPost onNewList={this.addNewList}/>
        {posts}
      </div>
    );
  }
}

export default Posts
