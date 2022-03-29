import { Children, PropsWithChildren } from 'react'
import { PrimaryButton, SecondaryButton } from './Buttons'

interface PageHeaderProps {
  title: string
  description: string
  moreInfoLabel: string
  moreInfoURL: string
}

const PageHeader: React.FC<PropsWithChildren<PageHeaderProps>> = ({
  title,
  description,
  moreInfoLabel,
  moreInfoURL,
  children,
}) => {
  return (
    <header className="page-header">
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
