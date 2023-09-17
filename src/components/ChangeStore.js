import { useDispatch } from 'react-redux';

import {
    PAGE_SET_TITLE
  } from '../reducers/types';
  
function ChangeStore() {
    const dispatch = useDispatch();

    const change = (string) => {
        const action = {
            type: PAGE_SET_TITLE,
            payload: { title: string }
        }
         dispatch(action);
      }    
    
      return (
     
        <div>
          <input type="text"  
          onChange={el => change(el.target.value)}/>
        </div>
 
      );
}

export default ChangeStore;