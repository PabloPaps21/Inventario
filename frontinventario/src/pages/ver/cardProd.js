import React, { Component } from 'react';
import ProductService from '../../services/ProductService';


const productService = new ProductService();

export default class CardProduct extends Component {
    state = {
        precio: 0,
        costo: 0,
        iva: 0
    }

    render() {
        return(
            <div>
                <article>
                    <p>{this.props.product.nombre}</p>
                    <p>{this.props.product.costo}</p>
                    <p>IVA: {this.state.iva}</p>
                    <p>precio:{this.props.product.precio}</p>
                </article>
            </div>
        )
    }

}