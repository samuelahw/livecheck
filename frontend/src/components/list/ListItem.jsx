import React from "react";

const ListItem = (props) => {

    return (

        <li className="flex items-center py-4 px-6">

            {props.streamer.is_live ? <span className="relative flex h-2 w-2 mr-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span> : <span className="relative flex h-2 w-2 mr-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gray-800 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
            </span>}

            {props.streamer.is_live ? <div className="ring-2 ring-red-800 rounded-full mr-4">
                <a href={"https://twitch.tv/" + props.streamer.display_name.toLowerCase()} rel="noreferrer" target="_blank">
                    <div className="ring-2 ring-red-800 rounded-full h-8 w-8 mt-2 ml-2 animate-ping fixed place-content-center">
                    </div>

                    <img className="rounded-full object-cover w-12 place-content-center" src={props.streamer.thumbnail_url}
                        alt="User avatar" />
                </a>

            </div> : <div className=" rounded-full mr-4">
                <a href={"https://twitch.tv/" + props.streamer.display_name.toLowerCase()} rel="noreferrer" target="_blank">
                    <img className="rounded-full object-cover w-12 place-content-center" src={props.streamer.thumbnail_url}
                        alt="User avatar" />
                </a>
            </div>}

            <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">{props.streamer.display_name}</h3>
                <p className="text-gray-600 text-base">twitch.tv/{props.streamer.display_name.toLowerCase()}</p>
            </div>
            <button onClick={(e) => props.deleteStreamer(props.index)} type="button" className="text-red-800 bg-white border border-red-400 focus:outline-none hover:bg-red-100 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">X</button>
        </li>
    );

}

export default ListItem