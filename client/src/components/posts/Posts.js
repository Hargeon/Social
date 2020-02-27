import React from 'react'
import axios from 'axios'
import Post from './Post'
import AddPost from './AddPost'

class Posts extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }

    this.addNewList = this.addNewList.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/posts')
      .then(response => {
        this.setState({
          posts: response.data.map(data => {
            return (
              {
                id: data.id,
                description: data.description
              }
            )
          })
        })
      })
      .catch(error => alert('Smth was wrong'))
  }

  addNewList(description) {
    const data = {
      post: {
        description: description
      }
    }

    axios.post('http://localhost:3000/api/v1/posts', data)
      .then(response => {
        this.setState(prev => {
          prev.posts.unshift(response.data)
          return(
            {
              posts: prev.posts
            }
          )
        })
      })
      .catch(error => alert('Smth was wrong'))
  }

  deletePost(id) {
    axios.delete(`http://localhost:3000/api/v1/posts/${id}`)
      .then(response => {
        this.setState(prev => {
          let newPosts = prev.posts.filter(function(value, index, arr) {
            return value.id !== id
          })

          return(
            {
              posts: newPosts
            }
          )
        })
      })
      .catch(error => alert('Smth was wrong'))
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post key={post.id} description={post.description} id={post.id} onDeletePost={this.deletePost}/>
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
