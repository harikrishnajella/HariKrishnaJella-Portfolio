import './index.css'

const ProjectsCategoriesTab = props => {
  const {tabDetails, onClickCategoriesTab, isActiveTabId} = props
  const {id, displayText} = tabDetails

  const onClickProjects = () => {
    onClickCategoriesTab(id)
  }

  const categoryActiveTabBtn = isActiveTabId ? 'active-tab-btn' : 'tab-btn'

  return (
    <li className="project-categoriestab-li">
      <button
        type="button"
        className={categoryActiveTabBtn}
        onClick={onClickProjects}
      >
        {displayText}
      </button>
    </li>
  )
}

export default ProjectsCategoriesTab