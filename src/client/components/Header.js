import React from 'react'
import { FormattedMessage } from 'react-intl'
import { inject, observer } from 'mobx-react'
import fa from 'fa'
import css from './Header.scss'

export default inject('RootStore')(observer(props => {
  const { showMessage } = props.RootStore

  return (
    <div className={css.header}>
      Applications for Transparency TCR
    </div>
  )
}))
