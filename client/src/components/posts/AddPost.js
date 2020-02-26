import React from 'react'

class AddPost extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onNewList(this.state.description)
  }

  handleChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className='description' type='text' onChange={this.handleChange} placeholder='Description' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default AddPost
