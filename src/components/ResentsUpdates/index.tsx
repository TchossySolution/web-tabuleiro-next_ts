import React, { useContext, useState } from 'react'
import { ResentsUpdatesContainer } from './styles'

type ResentsUpdatesTypes = {
  recents: {
    imagUser: string
    nameUser: string
    description: string
    date: string
  }
}

const recents = [
  {
    imagUser:
      'https://st.depositphotos.com/2290789/3667/i/600/depositphotos_36675429-stock-photo-king-lion-aslan.jpg',
    nameUser: 'Tonilson',
    description: 'Publicou um novo episodio',
    date: '11 Abr 2022'
  },
  {
    imagUser:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLbA8_zel1sRUpSODhedv8FhN162BsXclDQ&usqp=CAU',
    nameUser: 'Gabriela',
    description: 'Publicou um novo episodio',
    date: '12 Abr 2022'
  },
  {
    imagUser:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxfCwFJYT6unb7HmGMrgPGeScR_r_DfxkNTlSvGl0zBehMKDl5D2u0ZzlcQM7oRRrSic&usqp=CAU',
    nameUser: 'Claudia',
    description: 'Publicou um novo episodio',
    date: '13 Abr 2022'
  }
]

const ResentsUpdates: React.FC = (): JSX.Element => {
  return (
    <ResentsUpdatesContainer>
      <h1> Updates Recentes</h1>

      <div className="conteinerUpdates">
        {recents.map((item, index) => (
          <div className="conteinerInf">
            <img className="imageProfil" src={item.imagUser} alt="" />
            <div className="outer">
              <h4 className="description">
                {item.nameUser}
                <span> {item.description} </span>
              </h4>
              <p className="date"> {item.date} </p>
            </div>
          </div>
        ))}
      </div>
    </ResentsUpdatesContainer>
  )
}

export default ResentsUpdates
