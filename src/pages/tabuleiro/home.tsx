import React, { useContext } from 'react'
import HomeTotals from '../../components/HomeTotals'

import { FaUsers, FaPodcast } from 'react-icons/fa'
import { MdOutlineAssessment } from 'react-icons/md'
import { GiStarsStack } from 'react-icons/gi'
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi'
import ResentsUploads from '../../components/ResentsUpdates'

import { Chart } from 'react-google-charts'
import { Container, Title } from '../../styles/pages/_tabuleiro/home'
import RootTabuleiroLayout from '../../Layout/RootTabuleiroLayout'

const tabuleiroHome = (): JSX.Element => {
  const HomeTotalsData = [
    {
      colorIconConteiner: '#00D2FF',
      iconReact: <FaUsers color="#fff" size={36} />,
      nameTotal: 'Usuarios',
      numberTotal: 18,
      percentIcon: <HiArrowSmDown size={20} />,
      percentColor: '#ca0000',
      percent: 6,
      percentDescription: 'Diminuiu'
    },
    {
      colorIconConteiner: '#FA4F58',
      iconReact: <FaPodcast color="#fff" size={36} />,
      nameTotal: 'Podcast',
      numberTotal: 18,
      percentIcon: <HiArrowSmUp size={20} />,
      percentColor: '#14ca00',
      percent: 56,
      percentDescription: 'Aumentou'
    },
    {
      colorIconConteiner: '#F99C4E',
      iconReact: <MdOutlineAssessment color="#fff" size={36} />,
      nameTotal: 'Sessões',
      numberTotal: 50,
      percentIcon: <HiArrowSmDown size={20} />,
      percentColor: '#ca0000',
      percent: 31,
      percentDescription: 'Diminuiu'
    },
    {
      colorIconConteiner: '#3346D3',
      iconReact: <GiStarsStack color="#fff" size={36} />,
      nameTotal: 'Avaliação',
      numberTotal: 64,
      percentIcon: <HiArrowSmUp size={20} />,
      percentColor: '#14ca00',
      percent: 26,
      percentDescription: 'Aumentou'
    }
  ]

  const data = [
    ['Columns', 'Quanty'],
    ['Audiobooks', 2],
    ['Radios', 2],
    ['Podcasts', 7]
  ]

  const options = {
    title: '',
    textStyle: {
      fontSize: 14
    },
    width: 400,
    height: 300,
    // pieHole: 0.8,
    // pieSliceBorderColor: "none",
    chartArea: {
      width: '85%',
      height: '85%'
    },
    legend: {
      position: 'right',
      alignment: 'center',
      textStyle: {
        fontSize: 14
      }
    }
  }
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

      <div className="graphicConteiner">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={'100%'}
          height={'400px'}
        />

        <Chart
          width={'100%'}
          height={'100%'}
          chartType="BarChart"
          loader={<div>Carregando os graficos...</div>}
          data={[
            ['Nome', 'Idade'],
            ['Michael', 12],
            ['Elisa', 20],
            ['Robert', 7],
            ['John', 54],
            ['Jessica', 22],
            ['Aaron', 3],
            ['Margareth', 42],
            ['Miranda', 33],
            ['Rafael', 54],
            ['Tonilson', 22],
            ['Sebastião', 3],
            ['José', 42],
            ['Maura', 33],
            ['Onairda', 54],
            ['Filomena', 22],
            ['Alice', 3],
            ['Luyana', 42],
            ['Marineth', 33]
          ]}
          rootProps={{ 'data-testid': '6' }}
          chartPackages={['corechart', 'controls']}
          render={({ renderControl, renderChart }) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="seachName" style={{ width: '30%' }}>
                  {renderControl(() => true)}
                </div>
                <div className="seachAge" style={{ width: 400 }}>
                  {renderChart()}
                </div>
              </div>
            )
          }}
          controls={[
            {
              controlType: 'StringFilter',
              options: {
                filterColumnIndex: 0,
                matchType: 'any', // 'prefix' | 'exact',
                ui: {
                  label: 'Procurar pelo nome'
                }
              }
            },
            {
              controlType: 'NumberRangeFilter',
              controlID: 'age-filter',
              options: {
                filterColumnIndex: 1,
                ui: {
                  labelStacking: 'vertical',
                  label: 'Selecionar idade:',
                  allowTyping: false,
                  allowMultiple: false
                }
              }
            }
          ]}
        />
      </div>
    </Container>
  )
}

tabuleiroHome.layout = RootTabuleiroLayout

export default tabuleiroHome
