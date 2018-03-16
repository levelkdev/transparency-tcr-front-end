import React from 'react'
import css from './Home.scss'

export default () => {
  return (
    <div className={css.home}>

      <div className={css.header}>TCR List page</div>
      <div className={css.table}>
      	<hr/>
      	<li>Entry1</li>
      	<hr/>
      	<li>Entry2</li>
      	<hr/>
      	<li>Entry3</li>
      	<hr/>
      	<li>Entry4</li>
      </div>
      <div className={css.header}>
      	<button>VOTE!</button>
      </div>
    </div>
  )
}
