import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  const activeTabClassName = isActive
    ? 'tab-button-active'
    : 'tab-button-inactive'

  return (
    <li className="tab-items">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
