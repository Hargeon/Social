import React from 'react'

class Post extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
      </div>
    )
  }
}

export default Post
