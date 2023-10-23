import React from 'react'
import { useState } from 'react'
import { getStringFromLocalStorage, makeStringToList, setStringForLocalStorage } from '../localStorage'
import { getStreamer, getAccess } from '../../api/twitch'

const PopUp = ({ openPopUp, closePopUp, addStreamer }) => {

    const [inputStreamerName, setInputStreamerName] = useState("")
    const [errorView, setErrorView] = useState(false)

    const handlelosePopUp = (e) => {
        if (e.target.id === 'ModelContainer') {
            closePopUp();
        }
    }

    const handleOnChange = (event) => {
        setInputStreamerName(event.target.value)
        if (errorView) setErrorView(false)
    }

    const handleOnClick = () => {

        if (getStringFromLocalStorage() != null) {
            if (makeStringToList(getStringFromLocalStorage().toLowerCase()).includes(inputStreamerName)) {
                setErrorView(true)
            } else {
                getAccess().then((e) => {
                    getStreamer(e, inputStreamerName).then((e) => {
                        if (e === null) {
                            setErrorView(true)
                        } else {
                            setStringForLocalStorage(getStringFromLocalStorage() + "," + inputStreamerName)
                            addStreamer(e)
                            closePopUp()
                        }
                    })
                })
            }

        } else {
            getAccess().then((e) => {
                getStreamer(e, inputStreamerName).then((e) => {
                    if (e === null) {
                        setErrorView(true)
                    } else {
                        if (inputStreamerName.length !== 0) {
                            setStringForLocalStorage(inputStreamerName)
                            addStreamer(e)
                            closePopUp()
                        }
                        else {
                        }
                    }
                })
            })

        }
    }

    if (openPopUp !== true) return null

    return (
        <div
            id='ModelContainer'
            onClick={handlelosePopUp}
            className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-40 backdrop-blur-sm'>
            <div
                className='p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5'>
                <div
                    className='w-full p-3 justify-center items-center '>
                    <div className='border-b-4 border-indigo-500'>
                        <h2
                            className='font-semibold pb-2 text-center text-xl'>
                            Add new streamer to the list
                        </h2>
                    </div>

                    <div className='border-2 p-4 border-indigo-500'>
                        <fieldset className=''>
                            <legend className="sr-only">Countries</legend>
                            <label htmlFor="platform-option-1" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Streaming platform</label>
                            <div className="flex items-center mb-4">

                                <input id="platform-option-1" type="radio" readOnly name="platforms" value="twitch" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
                                <label htmlFor="platform-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Twitch
                                </label>
                            </div>

                        </fieldset>

                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Streamer name</label>
                            <input type="text" onChange={handleOnChange} value={inputStreamerName} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errorView ? <>
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Error.</span> Cant find streamer with that name or it is already on list</p>
                            </> : <>

                            </>}

                        </div>
                        <div className='flex justify-center pt-4'>
                            <button onClick={handleOnClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Add
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default PopUp