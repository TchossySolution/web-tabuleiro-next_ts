import React, { useState } from 'react'
// import HeaderPageName from '../../components/HeaderPageName'
import {
  UsersContainerStyle,
  AddUserContainer,
  ButtonAction,
  AddUser
} from '../../styles/pages/_tabuleiro/users'

import {
  AiFillEye,
  AiFillEdit,
  AiOutlineMail,
  AiOutlinePlus
} from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { RiGenderlessLine } from 'react-icons/ri'
import { ImListNumbered } from 'react-icons/im'
import { FaRegUser } from 'react-icons/fa'
import { BiPhoneCall, BiLocationPlus } from 'react-icons/bi'

import useImage from '../../assets/logo.png'
import swal from 'sweetalert'
import RootTabuleiroLayout from '../../Layout/RootTabuleiroLayout'
import ModalEditeUse from '../../components/_tabuleiro/ModalEditeUse'
import ModalCreateUse from '../../components/_tabuleiro/ModalCreateUse'
import InputForm from '../../components/InputForm'
import { BiSearchAlt } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaFilter, FaSortAmountUp } from 'react-icons/fa'

function Users() {
  const [search, setSearch] = useState<string>('')
  const [lineForPage, setLineForPage] = useState<number>(8)
  const [modalCreateUseIsOpen, setModalCreateUseIsOpen] = useState(false)
  const [modalEditeUseIsOpen, setModalEditeUseIsOpen] = useState(false)
  const [userSelect, setUserSelect] = useState(null)

  function handleChange(event: any) {
    setLineForPage(event.target.value)
  }

  function openModalCreateUse() {
    setModalCreateUseIsOpen(true)
  }

  function openModalEditeUseIs(item: any) {
    setUserSelect(item)

    setModalEditeUseIsOpen(true)
  }

  function deleteUse() {
    swal({
      title: 'Tem certeza?',
      text: 'Uma vez excluído, você não poderá recuperar este usuario!',
      buttons: ['Cancelar', 'Confirmar'],
      icon: 'warning',
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal('Puf! O usuario foi excluído!', {
          icon: 'success'
        })
      } else {
        swal('O usuario está seguro!', {
          icon: 'error'
        })
      }
    })
  }

  const users = [
    {
      _id: '1',
      photo_profile:
        'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg',
      first_name: 'Rafael',
      last_name: 'Pilartes',
      address: 'Angola, Benfica',
      phone: '923414621',
      email: 'rafael@gmail.com',
      gender: 'Masculino'
    },
    {
      _id: '2',
      photo_profile:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      first_name: 'Onairda',
      last_name: 'Moholo',
      address: 'Brasil, Rio',
      phone: '991414621',
      email: 'onairda@gmail.com',
      gender: 'Feminino'
    }
  ]

  const listUsers = users.map((item, index) => (
    <>
      <tr key={index}>
        <td>
          <p># {item._id} </p>
        </td>

        <td className="diplay">
          <img width={28} src={item.photo_profile} alt="" />
          <p>
            <span>{item.first_name}</span> <span>{item.last_name}</span>
          </p>
        </td>

        <td>
          <p> {item.address} </p>
        </td>

        <td>
          <p> {item.phone} </p>
        </td>

        <td>
          <p> {item.email} </p>
        </td>

        <td>
          <p> {item.gender} </p>
        </td>

        <td className="diplaySpace">
          <ButtonAction color={'#0e74b8'}>
            <AiFillEye size={24} className="iconEye" />
          </ButtonAction>

          <ButtonAction color={'#0eb839'}>
            <AiFillEdit
              onClick={() => openModalEditeUseIs(item)}
              size={24}
              className="iconEdit"
            />
          </ButtonAction>

          <ButtonAction onClick={deleteUse} color={'#b80e19'}>
            <MdDelete size={24} className="iconDelete" />
          </ButtonAction>
        </td>
      </tr>
    </>
  ))

  return (
    <UsersContainerStyle>
      {/* <HeaderPageName Title={'Users'} actionButtom={false} action={'Criar'} /> */}

      <div className="separation">
        <div className="header">
          <h1>Cliente</h1>
        </div>

        <AddUserContainer>
          <AddUser onClick={openModalCreateUse}>
            <AiOutlinePlus size={20} color="#fff" /> Criar usuário
          </AddUser>

          <div>
            <InputForm
              typeInput="text"
              placeholder="Pesquisar por usuários"
              inputValueChange={(e: any) => setSearch(e.target.value)}
              icon={<BiSearchAlt size={20} color="#504F50" />}
            />
          </div>
        </AddUserContainer>
      </div>

      <div className="separation">
        <div className="filterContainer">
          <div className="controlFilter">
            <h1>Listagem de ativos</h1>

            <div>
              <button>
                <FaSortAmountUp size={16} />
                <label>Ordenar</label>
              </button>
              <button>
                <FaFilter size={16} />
                <label>Filtrar</label>
              </button>
            </div>
          </div>
        </div>

        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <td>
                  <ImListNumbered /> Id
                </td>
                <td>
                  <FaRegUser /> Usuário
                </td>
                <td>
                  <div className="headTable">
                    <BiLocationPlus size={'1.2rem'} /> Endereço
                  </div>
                </td>
                <td>
                  <div className="headTable">
                    <BiPhoneCall size={'1.2rem'} /> Telefone
                  </div>
                </td>
                <td>
                  <div className="headTable">
                    <AiOutlineMail size={'1.2rem'} /> Email
                  </div>
                </td>
                <td>
                  <RiGenderlessLine size={'1.2rem'} /> Genero
                </td>
                <td className="diplaySpace">Ação</td>
              </tr>
            </thead>
            <tbody>{listUsers}</tbody>
          </table>

          <div className="footerTable">
            <div className="lineForPage">
              <label htmlFor="linePage">Linha por página: </label>
              <input
                type="number"
                min={8}
                max={20}
                value={lineForPage}
                onChange={handleChange}
              />
            </div>

            <div className="controlPage">
              <button>
                <IoIosArrowBack size={20} />
              </button>
              <button>
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalEditeUseIsOpen ? (
        <ModalEditeUse
          userInfo={userSelect}
          modalEditeUseIsOpen={modalEditeUseIsOpen}
          setModalEditeUseIsOpen={setModalEditeUseIsOpen}
        />
      ) : null}

      <ModalCreateUse
        modalCreateUseIsOpen={modalCreateUseIsOpen}
        setModalCreateUseIsOpen={setModalCreateUseIsOpen}
      />
    </UsersContainerStyle>
  )
}

Users.layout = RootTabuleiroLayout

export default Users
