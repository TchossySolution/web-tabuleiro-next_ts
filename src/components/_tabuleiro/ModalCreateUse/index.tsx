import React, { useState } from 'react'
import { ModalContainer, InputContainer } from './styles'

import Modal from 'react-modal'
import swal from 'sweetalert'
import BaseButton from '../../BaseButton'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { city, provinces } from '../../../data/adress'

type modalType = {
  modalCreateUseIsOpen: boolean
  setModalCreateUseIsOpen: (e: boolean) => void
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

const ModalCreateUse: React.FC<modalType> = ({
  modalCreateUseIsOpen,
  setModalCreateUseIsOpen
}): JSX.Element => {
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false)
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false)
  const [genre, setGenre] = useState<string>('Masculino')
  const [provincesSelect, setProvincesSelect] = useState<string>('Luanda')
  const [citySelect, setCitySelect] = useState<string>('Launda')
  const [imagesSelect, setImagesSelect] = useState(
    'https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg'
  )

  const genreOptions = ['Masculino', 'Feminino']

  const cityArray = city.map(option => {
    return option
  })

  function handlePasswordVisible() {
    setPasswordIsVisible(!passwordIsVisible)
  }

  function handleChange(event: any) {
    setGenre(event.target.value)
  }
  function handleChangeProvinces(event: any) {
    setProvincesSelect(event.target.value)
  }
  function handleChangeCity(event: any) {
    setCitySelect(event.target.value)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setModalCreateUseIsOpen(false)
  }

  const onImageChange = (e: any) => {
    const [file] = e.target.files
    setImagesSelect(URL.createObjectURL(file))
  }

  function createUse() {
    setLoadingBtn(true)

    setTimeout(() => {
      setLoadingBtn(false)

      swal({
        title: 'Sucesso!',
        text: 'O usuario foi criado!',
        icon: 'success'
        // button: ["Aww yiss!"],
      })
      setModalCreateUseIsOpen(false)
    }, 2000)
  }

  return (
    <Modal
      isOpen={modalCreateUseIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalContainer>
        <h1 className="titleModal">Criar um novo usuario</h1>

        <div className="form">
          <label className="imageContainer" htmlFor="inputTag">
            <img src={imagesSelect} alt="" />
            <span> Adicionar foto de perfil </span>
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
                <input type="text" />
              </InputContainer>
              <InputContainer>
                <label> Ultimo Nome </label>
                <input type="text" />
              </InputContainer>
            </div>

            <div className="areaForm">
              <InputContainer>
                <label> Email </label>
                <input type="email" />
              </InputContainer>
              <InputContainer>
                <label> Palavra-Passe </label>
                <div className="row">
                  <input type={passwordIsVisible ? 'password' : 'text'} />
                  <button onClick={handlePasswordVisible}>
                    {passwordIsVisible ? (
                      <AiFillEye color="#fff" size={24} />
                    ) : (
                      <AiFillEyeInvisible color="#fff" size={24} />
                    )}
                  </button>
                </div>
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
            name="Criar usuário"
            isLoading={loadingBtn}
            onClickButton={createUse}
            disabled={loadingBtn}
          />
        </div>
      </ModalContainer>
    </Modal>
  )
}

export default ModalCreateUse
