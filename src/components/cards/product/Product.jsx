import React from 'react';
import './Product.css'

function Product({product}) {
    return (
        <div className={`product ${product.id}`}>
            <div className="image-container" style={{backgroundImage: `url(${product.image})`}}>
                <div className="on-hover-box">
                    <button className='add-to-cart' id='btn-add-to-cart'>Add to cart</button>
                    <div className="sizes">{product.sizes.map(e => (<span className='product-size'>{e}</span>))}</div>
                </div>
                <span className={`bi bi-heart-fill like ${product.like.toString().toLowerCase()}`}></span>
            </div>
            <div className='info-block'>
                <span className='product-name'>{product.name}</span>
                <div className='product-colors'>
                    {product.colors.map(e => (
                        <div className='color-input-block'>
                            <span className='p-color' style={{backgroundColor: `#${e}`}}></span>
                            <input className="color-radio" type='radio' name="color" id={e}/>
                        </div>
                    ))}
                </div>
                <div className='prices'>
                    <span className='prev-price'>prev price: {product.prev_price}</span>
                    <span className='price'>cur price: {product.price}</span>
                </div>
            </div>
        </div>
    );
}

export default Product;