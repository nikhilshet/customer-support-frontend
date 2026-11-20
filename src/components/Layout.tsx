import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import './layout.css'

type LayoutProps = {
  children: ReactNode
  title: string
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin__main">
        <header className="admin__header">
          <h1 className="admin__title">{title}</h1>
        </header>
        <main className="admin__content">{children}</main>
      </div>
    </div>
  )
}