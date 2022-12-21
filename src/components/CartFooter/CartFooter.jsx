import "./cartFooter.scss";
import priceFormatter from "../../utils/priceFormater";

const CartFooter = ({total}) => {
    return ( 
        <footer className="cart-footer">
            <div className="cart-footer__count">{total.count} штук</div>
            <div className="cart-footer__price">{priceFormatter.format(total.price)} PLN</div>
        </footer>
    );
}
 
export default CartFooter;