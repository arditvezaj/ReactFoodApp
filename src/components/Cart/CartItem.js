const CartItem = (props) => {
  return (
    <li className="flex justify-between items-center py-4 px-0 my-4 mx-0">
      <div>
        <h2>{props.name}</h2>
        <div className="w-[10rem] flex justify-between items-center">
          <span className="font-bold text-[#8a2b06]">{props.price}</span>
          <span className="font-bold border-[#ccc] rounded-md text-[#363636]">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
