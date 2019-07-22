import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        { props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} isEaten={props.isEaten}/>) }
        <MoreButton rotateSushis={props.rotateSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer