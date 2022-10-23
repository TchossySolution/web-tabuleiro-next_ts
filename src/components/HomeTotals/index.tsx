import React, { useContext, useState } from 'react'
import { HomeTotalsContainer } from './styles'

type HomeTotalsTyles = {
  colorIconConteiner: string
  iconReact: JSX.Element
  nameTotal: string
  numberTotal: number
  percentIcon: JSX.Element
  percentColor: string
  percent: number
  percentDescription: string
}
const HomeTotals: React.FC<HomeTotalsTyles> = ({
  colorIconConteiner,
  iconReact,
  nameTotal,
  numberTotal,
  percentIcon,
  percent,
  percentColor,
  percentDescription
}): JSX.Element => {
  return (
    <HomeTotalsContainer color={colorIconConteiner}>
      <div className="lightConteiner">
        <div
          className="iconConteiner"
          style={{ backgroundColor: colorIconConteiner }}
        >
          {iconReact}
        </div>
        <div className="infoConteiner">
          <h4 className="nameTotal"> {nameTotal} </h4>
          <h1 className="numberTotal"> {numberTotal} </h1>
          <div className="percent">
            <span style={{ color: percentColor }}>
              {percentIcon}
              {percent}%
            </span>
            {percentDescription}
          </div>
        </div>
      </div>

      <div className="rightConteiner"></div>
    </HomeTotalsContainer>
  )
}

export default HomeTotals
