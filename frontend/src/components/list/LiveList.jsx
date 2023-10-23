import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { getAccess, getStreamer } from '../../api/twitch';
import { getStringFromLocalStorage, makeListToString, makeStringToList, setStringForLocalStorage } from '../localStorage';
import PopUp from '../popup/PopUp';


export default function App() {

    const [streamerList, setStreamerList] = useState([]);
    const [update, setUpdate] = useState(false)

    const [openPopup, setOpenPopup] = useState(false);
    const HandleRemovePopUp = () => setOpenPopup(false);

    const deleteStreamer = (index) => {

        let list = makeStringToList(getStringFromLocalStorage())
        if (list !== undefined) {
            if (list.length === 1) {
                localStorage.removeItem("streamerListString")
            } else {
                list.splice(index, 1)
                setStringForLocalStorage(makeListToString(list))
            }
        }
        streamerList.splice(index, 1)
        setUpdate(!update)
    }

    const addStreamer = (object) => {
        streamerList.push(object)
    }

    useEffect(() => {

        console.log(makeStringToList(getStringFromLocalStorage()))
        console.log(streamerList.length)

        let streamersFromApi = []
        let nameList = makeStringToList(getStringFromLocalStorage())

        if (getStringFromLocalStorage() !== null && streamerList.length === 0) {
            getAccess().then((e) => {

                for (let x of nameList) {
                    getStreamer(e, x).then((e) => {
                        console.log(e)
                        streamersFromApi.push(e)
                    }).then(() => {
                        console.log(streamersFromApi.length)
                        if (streamersFromApi.length === nameList.length) setStreamerList(streamersFromApi)
                    })
                }

            })
        } else {
            setStreamerList(streamerList);
        }
    }, [update])

    return (

        <div>
            {streamerList.length === 0 ? <>
                <div className="bg-gray-100 shadow-md rounded-t-lg overflow-hidden max-w-md mx-auto mt-16 flex justify-center">
                    <div className="bg-gray-100 pt-2 px-4">
                        <h2 className="text-xl font-semibold text-gray-800">Hey! Create your list of streamers</h2>
                        <p></p>
                    </div>
                </div>
                <div className="bg-gray-100 shadow-md rounded-b-lg overflow-hidden max-w-md mx-auto flex justify-center">
                    <div className="bg-gray-100 pb-2 px-4">
                        <h2 className="text-xl font-semibold text-gray-800">Start by pressing the button below!</h2>
                        <p></p>
                    </div>
                </div>
            </> : <>
                <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
                    <div className="bg-gray-100 py-2 px-4">
                        <h2 className="text-xl font-semibold text-gray-800">Streamers</h2>
                    </div>
                    <ul className="divide-y divide-gray-200">
                        {streamerList.length !== 0 &&
                            streamerList.map((e, i) => <ListItem streamer={e} index={i} key={i} deleteStreamer={deleteStreamer}></ListItem>)
                        }
                    </ul>
                </div></>}

            <div className='flex justify-center pt-12'>
                <button
                    onClick={() => setOpenPopup(true)}
                    className='bg-green-700 hover:bg-green-900 border-2 border-green-800 text-neutral-100 font-bold py-2 px-4 rounded-full '>
                    <p>Add</p>
                </button>
            </div>
            <PopUp openPopUp={openPopup} addStreamer={addStreamer} closePopUp={HandleRemovePopUp} />
        </div>

    );
}

