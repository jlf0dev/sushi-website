import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children, FC } from 'react'

type Props = {
    children: any,
    activeClassName: string
    href: string
  }

const ActiveLink: FC<Props> = ({children, activeClassName, href}) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath === href 
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink