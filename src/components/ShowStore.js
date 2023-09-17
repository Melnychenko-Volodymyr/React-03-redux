import { useSelector } from 'react-redux';

function ShowStore() {
    const a = useSelector((state) => state.page.title); 
    return (

          <div>
            <h1>{a}</h1>
          </div>
     
        );
}

export default ShowStore;