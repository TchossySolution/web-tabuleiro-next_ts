import React, { useContext } from 'react'
import HomeTotals from '../../components/HomeTotals'

import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi'
import { MdDeliveryDining, MdVerifiedUser } from 'react-icons/md'
import { IoRestaurantSharp } from 'react-icons/io5'
import { FaUserFriends } from 'react-icons/fa'

import { Container, Title } from '../../styles/pages/_tabuleiro/home'
import RootTabuleiroLayout from '../../Layout/RootTabuleiroLayout'

function tabuleiroHome() {
  const HomeTotalsData = [
    {
      colorIconConteiner: '#00D2FF',
      iconReact: <FaUserFriends color="#fff" size={36} />,
      nameTotal: 'Clientes',
      numberTotal: 18,
      percentIcon: <HiArrowSmDown size={20} />,
      percentColor: '#ca0000',
      percent: 6,
      percentDescription: 'Diminuiu'
    },
    {
      colorIconConteiner: '#FA4F58',
      iconReact: <IoRestaurantSharp color="#fff" size={36} />,
      nameTotal: 'Restaurantes',
      numberTotal: 18,
      percentIcon: <HiArrowSmUp size={20} />,
      percentColor: '#14ca00',
      percent: 56,
      percentDescription: 'Aumentou'
    },
    {
      colorIconConteiner: '#F99C4E',
      iconReact: <MdVerifiedUser color="#fff" size={36} />,
      nameTotal: 'Fornecedores',
      numberTotal: 50,
      percentIcon: <HiArrowSmDown size={20} />,
      percentColor: '#ca0000',
      percent: 31,
      percentDescription: 'Diminuiu'
    },
    {
      colorIconConteiner: '#3346D3',
      iconReact: <MdDeliveryDining color="#fff" size={36} />,
      nameTotal: 'Entregadores',
      numberTotal: 64,
      percentIcon: <HiArrowSmUp size={20} />,
      percentColor: '#14ca00',
      percent: 26,
      percentDescription: 'Aumentou'
    }
  ]

  return (
    <Container>
      <Title>Dashboard</Title>
      <div className="topBodyDashboard">
        <div className="Totals">
          {HomeTotalsData.map((item, index) => (
            <HomeTotals
              key={index}
              colorIconConteiner={item.colorIconConteiner}
              iconReact={item.iconReact}
              nameTotal={item.nameTotal}
              numberTotal={item.numberTotal}
              percentIcon={item.percentIcon}
              percentColor={item.percentColor}
              percent={item.percent}
              percentDescription={item.percentDescription}
            />
          ))}
        </div>
        {/* <ResentsUploads /> */}
      </div>
    </Container>
  )
}

tabuleiroHome.layout = RootTabuleiroLayout

export default tabuleiroHome
