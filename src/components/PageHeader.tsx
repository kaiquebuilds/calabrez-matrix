interface PageHeaderProps {
  title: string
  description: string
  moreInfoLabel: string
  moreInfoURL: string
}

const PageHeader = ({
  title,
  description,
  moreInfoLabel,
  moreInfoURL,
}: PageHeaderProps) => {
  return (
    <header className="page-header">
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={moreInfoURL}>{moreInfoLabel}</a>
      </div>
    </header>
  )
}

export default PageHeader
