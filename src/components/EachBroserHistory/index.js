import {Component} from 'react'
import BrowserHistory from '../BrowserHistory'

import './index.css'

class EachBroserHistory extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = props
    this.state = {intialUsersList: initialHistoryList, searchInput: ''}
  }

  onchangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {intialUsersList} = this.state
    const deleteditemsList = intialUsersList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({intialUsersList: deleteditemsList})
  }

  render() {
    const {intialUsersList, searchInput} = this.state
    const filteredItemsList = intialUsersList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let a = false
    if (filteredItemsList.length === 0) {
      a = true
    }
    return (
      <div className="browser-history-con">
        <div className="navBarsection">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-con">
            <button type="button" className="search-button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search-logo"
              />
            </button>
            <input
              type="text"
              className="input-ele"
              placeholder="Search history"
              onChange={this.onchangeInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="broser-items-container">
          <ul>
            {filteredItemsList.map(eachItem => (
              <BrowserHistory
                eachBrowser={eachItem}
                key={eachItem.id}
                deleteItem={this.deleteItem}
              />
            ))}
            {a && <p className="no-content">There is no history to show </p>}
          </ul>
        </div>
      </div>
    )
  }
}
export default EachBroserHistory
