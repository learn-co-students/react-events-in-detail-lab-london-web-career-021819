import React from 'react'

class DelayedButton extends React.Component {

  handleClick = e => {
    e.persist()
    setTimeout( _ => this.props.onDelayedClick(e), this.props.delay)
  }

  render () {
    return (
      <button onClick={this.handleClick}>Delay button</button>
    )
  }
}

export default DelayedButton