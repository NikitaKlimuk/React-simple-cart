import ButtonDelete from "../ButtonDelete/ButtonDelete";
import Count from "../Count/Count";
import priceFormatter from "../../utils/priceFormater";

import "./product.scss";


const Product = ({product, deleteProduct, increase, decrease, changeValue}) => {
    const {img, title, count, id, priceTotal} = product;

    return ( 
        <section className="product">
            <div className="product__img"><img src={`./img/products/${img}`} alt={title}/></div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <Count 
                    count={count} 
                    increase={increase} 
                    decrease={decrease} 
                    id={id}
                    changeValue={changeValue}
                />
            </div>
            <div className="product__price">
                {priceFormatter.format(priceTotal)} PLN.
            </div>
            <div className="product__controls">
                <ButtonDelete deleteProduct={deleteProduct} id={id}/>
            </div>
        </section>
     );
}
 
export default Product;