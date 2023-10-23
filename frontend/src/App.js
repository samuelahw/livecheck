import './App.css';
import { useState } from 'react';
import NavbarComponent from './components/navbar/Navbar';
import LiveList from './components/list/LiveList';

const App = () => {

  const [tokeni, setTokeni] = useState("");
  const [update, setUpdate] = useState(false)

  // useEffect(() => {
  //   getAccess().then((e) => getStreamer(e, "rulkku").then((asd) => console.log(asd)))
  // }, [])

  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className="bg-bgblack">
        <LiveList></LiveList>
      </div>
    </div>
  );
}

export default App;

// import './App.css';
// import { useEffect, useState } from 'react';
// import NavbarComponent from './components/navbar/Navbar';
// import LiveList from './components/list/LiveList';
// import { getStreamer, getAccess } from './api/twitch';
// import PopUp from './components/popup/PopUp';

// const App = () => {

//   const [tokeni, setTokeni] = useState("");
//   const [update, setUpdate] = useState(false)

//   const [openPopup, setOpenPopup] = useState(false);

//   const HandleRemovePopUp = () => setOpenPopup(false);

//   // useEffect(() => {
//   //   getAccess().then((e) => getStreamer(e, "rulkku").then((asd) => console.log(asd)))
//   // }, [])

//   return (
//     <div>
//       <NavbarComponent></NavbarComponent>
//       <div className="bg-bgblack">
//         <LiveList></LiveList>
//       </div>
//       <div className='flex justify-center pt-12'>
//         <button
//           onClick={() => setOpenPopup(true)}
//           className='bg-green-700 hover:bg-green-900 border-2 border-green-800 text-neutral-100 font-bold py-2 px-4 rounded-full '

//         >
//           <p>Add</p>
//         </button>
//       </div>

//       <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
//     </div>
//   );
// }

// export default App;


