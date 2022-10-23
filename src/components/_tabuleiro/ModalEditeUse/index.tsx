import React, { useState } from 'react'
import { ModalContainer, InputContainer } from './styles'

import Modal from 'react-modal'
import swal from 'sweetalert'
import BaseButton from '../../BaseButton'
import { provinces } from '../../../data/adress'

type modalType = {
  userInfo: any
  modalEditeUseIsOpen: boolean
  setModalEditeUseIsOpen: (e: boolean) => void
}

const customStyles = {
  overlay: {
    backgroundColor: '#00000069',
    zIndex: 10
  },
  content: {
    width: '70%',
    height: '65%',
    backgroundColor: 'transparent',
    padding: 0,
    borderWidth: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const ModalEditeUse: React.FC<modalType> = ({
  userInfo,
  modalEditeUseIsOpen,
  setModalEditeUseIsOpen
}): JSX.Element => {
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false)
  const [userName, setUserName] = useState(userInfo.last_name)
  const [genre, setGenre] = useState<'Masculino' | 'Feminino'>(userInfo.gender)
  const [provincesSelect, setProvincesSelect] = useState<string>('Luanda')
  const [imagesSelect, setImagesSelect] = useState(userInfo.photo_profile)

  const genreOptions = ['Masculino', 'Feminino']

  function handleChange(event: any) {
    setGenre(event.target.value)
  }

  function handleChangeProvinces(event: any) {
    setProvincesSelect(event.target.value)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setModalEditeUseIsOpen(false)
  }

  const onImageChange = (e: any) => {
    const [file] = e.target.files
    setImagesSelect(URL.createObjectURL(file))
  }

  function editeUse() {
    setLoadingBtn(true)

    setTimeout(() => {
      setLoadingBtn(false)

      swal({
        title: 'Sucesso!',
        text: 'Os dados do usuário foram atualizados com sucesso!',
        icon: 'success'
        // button: ["Aww yiss!"],
      })
      setModalEditeUseIsOpen(false)
    }, 2000)
  }

  return (
    <Modal
      isOpen={modalEditeUseIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <h1 className="titleModal">Editar usuario</h1>

        <div className="form">
          <label className="imageContainer" htmlFor="inputTag">
            <img src={imagesSelect} alt="" />
            <span> Alterar foto de perfil </span>
            <input
              type="file"
              id="inputTag"
              accept="image/"
              onChange={onImageChange}
              style={{ display: 'none' }}
            />
          </label>

          <div className="containerAreaForm">
            <div className="areaForm">
              <InputContainer>
                <label> Primeiro Nome </label>
                <input value={userInfo.first_name} type="text" />
              </InputContainer>
              <InputContainer>
                <label> Ultimo Nome </label>
                <input value={userInfo.last_name} type="text" />
              </InputContainer>
            </div>

            <div className="areaForm">
              <InputContainer>
                <label> Email </label>
                <input value={userInfo.email} type="email" />
              </InputContainer>
            </div>

            <div className="areaForm">
              <InputContainer>
                <label> Número de telefone </label>
                <input type="tel" />
              </InputContainer>
              <InputContainer>
                <label> Genero </label>
                <select value={genre} onChange={handleChange}>
                  {genreOptions.map(option => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </InputContainer>
              <InputContainer>
                <label> Data de nascimento </label>
                <input type="date" />
              </InputContainer>
            </div>

            <div className="areaForm">
              <InputContainer>
                <label> Província </label>
                <select
                  value={provincesSelect}
                  onChange={handleChangeProvinces}
                >
                  {provinces.map(option => {
                    return (
                      <option value={option.province}>{option.province}</option>
                    )
                  })}
                </select>
              </InputContainer>

              <InputContainer>
                <label> Bairro </label>
                <input type="text" />
              </InputContainer>
            </div>
          </div>
        </div>

        <div>
          <BaseButton
            name="Salvar alterações"
            isLoading={loadingBtn}
            onClickButton={editeUse}
            disabled={loadingBtn}
          />
        </div>
      </ModalContainer>
    </Modal>
  )
}

export default ModalEditeUse
