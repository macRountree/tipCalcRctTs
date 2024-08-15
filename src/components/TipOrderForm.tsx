import {Dispatch} from 'react';
import {OrderActions} from '../reducers/orderReducer';

const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%',
  },
];
interface TipOrderFormProps {
  dispatch: Dispatch<OrderActions>;
  tip: number;
}

export const TipOrderForm = ({tip, dispatch}: TipOrderFormProps) => {
  return (
    <div className="border-y border-dashed border-purple-400 p-5">
      <h3 className="font-black text-2xl">Tip:</h3>
      <form action="">
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex gap-2 items-center">
            <label htmlFor={tipOption.id} className="font-bold">
              {tipOption.label}{' '}
            </label>
            <input
              type="radio"
              id={tipOption.id}
              name="tipOption"
              value={tipOption.value}
              className=" appearance-none w-4 h-4 rounded-full checked:bg-purple-800 border  border-purple-400  p-2"
              onChange={e =>
                dispatch({type: 'add-tip', payload: {value: +e.target.value}})
              } //*On change, set the tipOption to the value of the radio button */
              checked={tipOption.value === tip} //*If the value of the radio button is equal to the tip, then it is checked */
            />
          </div>
        ))}
      </form>
    </div>
  );
};
