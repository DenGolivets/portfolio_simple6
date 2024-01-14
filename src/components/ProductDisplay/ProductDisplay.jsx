import React, { useContext } from 'react';
import './productDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

function ProductDisplay(props) {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    {product.old_price}$
                </div>
                <div className="productdisplay-right-price-new">
                {product.new_price}$
                </div>
            </div>
            <div className="productdisplay-right-description">
                Nostrud Lorem adipisicing ex do qui nisi eiusmod cillum laboris incididunt. Fugiat ipsum elit eiusmod duis sunt exercitation minim nostrud anim labore dolor. 
                Aute et culpa mollit cupidatat ipsum qui. Aliquip consequat qui qui cupidatat anim laboris quis anim exercitation. Ut proident do velit proident proident culpa. 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Sizes</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD To Cart</button>
            <p className='productdisplay-right-category'>
                <span>Category :</span> Women, T-Shirt, Crop Top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tags :</span> Modern, Latest, 
            </p>
        </div>
    </div>
    )
}

export default ProductDisplay;