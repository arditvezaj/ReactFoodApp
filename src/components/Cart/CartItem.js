const CartItem = (props) => {
  return (
    <li className="flex justify-between items-center pb-2 my-4 mx-0 border-b-2">
      <div>
        <h2 className="font-bold text-xl">{props.name}</h2>
        <div className="w-[10rem] flex justify-between items-center">
          <span className="font-bold text-lg text-[#8a2b06]">
            ${props.price}
          </span>
          <span className="font-bold border-2 px-2 py-1 border-slate-200 rounded-md text-[#363636]">
            x {props.amount}
          </span>
        </div>
      </div>

      <div className="flex">
        <button
          onClick={props.onRemove}
          className="font-bold mr-1 text-lg border-2 px-4 py-1 border-[#8a2b06] rounded-md text-[#8a2b06]"
        >
          -
        </button>
        <button
          onClick={props.onAdd}
          className="font-bold text-lg border-2 px-4 py-1 border-[#8a2b06] rounded-md text-[#8a2b06]"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
