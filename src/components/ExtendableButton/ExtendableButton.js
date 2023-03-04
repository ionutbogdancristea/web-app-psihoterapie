import plus from './media/plus.png';
import './noBlueHighlight.css'

function ExtendableButton(props) 
{
    return <button className="noBlueHighlight" onClick={props.toggle_param}>
        <div className="flex flex-row items-center text-left md:justify-center py-2.5 px-5 mr-2 mb-2 text-slate-700 focus:outline-none bg-white rounded-full border shadow-md border-gray-200 hover:bg-gray-100 hover:text-ana-purple focus:z-10 focus:ring-4 focus:ring-gray-200">
          <img src={plus} className="m-1" alt="plus"/>
          <div className={"font-Quicksand_Regular md:text-lg drop-shadow-lg " + (props.state_params[0] ? "":"font-medium")}>{props.question}</div>
        </div>
        <div className={"mx-2 md:mx-0 text-left font text-slate-700 " + (props.state_params[0] ? "hidden":"")}>
            {props.answer}
        </div>
    </button>
}

export default ExtendableButton;