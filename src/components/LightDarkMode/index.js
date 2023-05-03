import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  changeMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const mode = isDark ? 'dark-mode' : 'light-mode'
    const text = isDark ? 'text-light' : 'text-dark'
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`container ${mode}`}>
          <h1 className={`heading ${text}`}>Click To Change Mode</h1>
          <button
            className={`button ${mode}`}
            type="button"
            onClick={this.changeMode}
            id="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
