const PageHeader = ({
  title,
  description,
  moreInfoLabel,
  moreInfoURL,
  children,
}) => {
  return (
    <header className="page_header">
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={moreInfoURL}>{moreInfoLabel}</a>
      </div>
      <div className="actions">{children}</div>
    </header>
  )
}

export default PageHeader
