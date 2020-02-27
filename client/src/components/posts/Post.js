import React from 'react'

class Post extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onDeletePost(this.props.id)
  }

  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    )
  }
}

export default Post
