import React from 'react'
import css from './Home.scss'

export default () => {
  return (
    <div className={css.home}>

      <div className={css.header}>Transparency TCR List page</div>
      <div className={css.list}>
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
      	<a href="Voting.js">VOTE</a>
      </div>
    </div>
  )
}
