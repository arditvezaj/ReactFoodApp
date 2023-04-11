const CartItem = (props) => {
  return (
    <li className="">
      <div>
        <h2>{props.name}</h2>
        <div className="">
          <span className="">{props.price}</span>
          <span className="">x {props.amount}</span>
        </div>
      </div>
      <div className="">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
