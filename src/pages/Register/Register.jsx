import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import handleFormSubmit from './handleSubmit'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { redirect, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './Register.css'
import { Alert } from 'react-bootstrap'

function FormExample() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    uf: '',
    numero: '',
    dataNascimento: '',
    senha: '',
  })

  const [errors, setErrors] = useState('')

  const { clearShoppingCart } = useShoppingCart()

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const finishShopping = () => {
    clearShoppingCart()
    navigate('/')
  }

  return (
    <article className='page'>
      <Header />

      {
        errors !== '' &&
        <Alert className='alert' variant='danger'>
          {errors}
        </Alert>
      }

      <Form
        className='register-form'
        onSubmit={(e) => {
          handleFormSubmit(e, formData, setErrors, finishShopping)
        }}
      >
        <Form.Group className='mb-3'>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type='text'
            name='nome'
            value={formData.nome}
            onChange={handleChange}
            isInvalid={!!errors.nome}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.nome}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type='text'
            name='cpf'
            value={formData.cpf}
            onChange={handleChange}
            isInvalid={!!errors.cpf}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.cpf}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type='text'
            name='cep'
            value={formData.cep}
            onChange={handleChange}
            isInvalid={!!errors.cep}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.cep}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Rua</Form.Label>
          <Form.Control
            type='text'
            name='rua'
            value={formData.rua}
            onChange={handleChange}
            isInvalid={!!errors.rua}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.rua}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Bairro</Form.Label>
          <Form.Control
            type='text'
            name='bairro'
            value={formData.bairro}
            onChange={handleChange}
            isInvalid={!!errors.bairro}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.bairro}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type='text'
            name='cidade'
            value={formData.cidade}
            onChange={handleChange}
            isInvalid={!!errors.cidade}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.cidade}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>UF</Form.Label>
          <Form.Control
            type='text'
            name='uf'
            value={formData.uf}
            onChange={handleChange}
            isInvalid={!!errors.uf}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.uf}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Número</Form.Label>
          <Form.Control
            type='text'
            name='numero'
            value={formData.numero}
            onChange={handleChange}
            isInvalid={!!errors.numero}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.numero}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type='date'
            name='dataNascimento'
            value={formData.dataNascimento}
            onChange={handleChange}
            isInvalid={!!errors.dataNascimento}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.dataNascimento}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type='password'
            name='senha'
            value={formData.senha}
            onChange={handleChange}
            isInvalid={!!errors.senha}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.senha}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    </article>
  )
}

export default FormExample
