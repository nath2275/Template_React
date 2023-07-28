import './App.css';
import React, { useState } from 'react' 

import Confirm from './Popup/Confirm';

const CloudEvent = React.createContext() ////////

function App() {
  const [events, setevents] = useState({
    confirm:null, number: 1
  })

  // popup
  const [UseEvent, setUseEvent] = useState(null) //'open popup because "UseEvent" is not null '
  let popup_confirm = null
  if (!!UseEvent){
    popup_confirm = <Confirm text="ยืนยันลบ Order หรือไม่" closePopup={setUseEvent} />
  }
  return (
    <CloudEvent.Provider value={{events, setevents}} >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="App">
        {popup_confirm}
      </div>
    </CloudEvent.Provider>
  );
}

export {CloudEvent}  ////////
export default App;
