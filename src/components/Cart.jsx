import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItem = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearCart());
    }
    return (
        <>
        <div>Cart</div>
        <div>{cartItem}</div>
        <button onClick ={ () => { handleClick();}}>Clear Cart</button>
        {cartItem.length === 0 && <h1>Feeling Empty</h1>}

        </>
    )
}

export default Cart;