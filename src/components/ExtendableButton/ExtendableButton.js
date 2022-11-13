import plus from './media/plus.png';

function ExtendableButton(props) 
{
    return <button className="" onClick={props.toggle_param}>
        <div className="flex flex-row items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-ana-purple focus:z-10 focus:ring-4 focus:ring-gray-200">
          <img src={plus} className="m-1" alt="plus"/>
          <div className="font-museoslab300">{props.question}</div>
        </div>
        <div className={"font-museoslab100 " + (props.state_params[0] ? "hidden":"")}>
            {props.answer}
        </div>
    </button>
}

export default ExtendableButton;