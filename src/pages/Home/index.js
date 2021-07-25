import React, {useState} from 'react'
import * as S from './styled'
import {useHistory} from 'react-router-dom'

function App(props) {
  const [nome, setNome] = useState('')
  const [endereço, setEndereço] = useState('')
  const [produto, setProduto] = useState('')
  const [dataTransacao, setDataTransacao] = useState('')
  const [preco, setPreco] = useState('')
  const history = useHistory()

  function valueConversion(value) {
    value = Number(value.replace(/\,\./g, "")) * 100
    value = Math.round(value)
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "")
    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
    return signal + value
  }

  function register() {
    let dataList = JSON.parse(localStorage.getItem('products')) || [];
    let idItem = dataList.length;
    const data = {
      clientName: nome,
      address: endereço,
      date: dataTransacao,
      id: idItem,
      productName: produto,
      price: valueConversion(preco)
    }
    dataList.push(data)
    localStorage.setItem('products', JSON.stringify(dataList))
  }

  function visualize() {
    history.push('/products')
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.InputDiv>
          <S.Label>Nome do cliente
          <S.Input name="name" id="name" className="nameInput" placeholder="Cliente" value={nome} onChange={e => setNome(e.target.value)}/>
          </S.Label>
          <S.Label>Endereço
          <S.Input name="address" id="address" className="addressInput" placeholder="Endereço" value={endereço} onChange={e => setEndereço(e.target.value)}/>
          </S.Label>
          <S.Label>Data da transação
          <S.Input name="date" id="date" className="dateInput" type="date" value={dataTransacao} onChange={e => setDataTransacao(e.target.value)}/>
          </S.Label>
          <S.Label>Produto
          <S.Input name="product" id="product" className="productInput" placeholder="Produto" value={produto} onChange={e => setProduto(e.target.value)}/>
          </S.Label>
          <S.Label>Preço
          <S.Input name="price" id="price" className="priceInput" placeholer="Preço" value={preco} onChange={e => setPreco(e.target.value)}/>
          </S.Label>        
        </S.InputDiv>
          <S.Button type="button" onClick={register}>Cadastrar</S.Button>
          <S.Button type="button" onClick={visualize}>Visualizar</S.Button>
      </S.Content>
    </S.HomeContainer>
  )
}

export default App;