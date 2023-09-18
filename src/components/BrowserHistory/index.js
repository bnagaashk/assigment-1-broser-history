import './index.css'

const BrowserHistory = props => {
  const {eachBrowser, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachBrowser

  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="browser-history-item-container">
        <div className="website-con">
          <h1 className="time">{timeAccessed}</h1>
          <img src={logoUrl} className="logo" alt="domain logo" />
          <h1 className="title">{title}</h1>
          <p className="website-name">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
