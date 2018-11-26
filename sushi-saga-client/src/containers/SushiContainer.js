import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let {sushis, handleNextSushi, handleEatSushi, eaten} = props
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi} taken={eaten.includes(sushi)}/>)}
        <MoreButton handleNextSushi = {handleNextSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
