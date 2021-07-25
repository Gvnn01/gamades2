import React, {useEffect, useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Products() {
	const history = useHistory();
  const [products, setProducts] = useState([])

  useEffect(() => {
	    let dataProducts = localStorage.getItem('products') || [];
			if (dataProducts !== null) {
	    	dataProducts = JSON.parse(dataProducts)
	    	setProducts(dataProducts);
	  } else {
	    	history.push('/');    
	  }
  }, [])
  return (
    <S.Container>
      <S.Title>Dados de produtos</S.Title>
      <S.List>
	  	{ products.map(product => {
		  	return (
		    	<S.ListItem key={product.id}>
						<p>Cliente: {product.clientName}</p>
						<p>Endereço do cliente: {product.address}</p>
						<p>Data da compra: {product.date}</p>
						<p>Produto: {product.productName}</p>	
						<p>Id: {product.id}</p>
						<p>Preço: {product.price}</p>
					</ S.ListItem>
			)
	  }) }
      </S.List>
			<S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}
