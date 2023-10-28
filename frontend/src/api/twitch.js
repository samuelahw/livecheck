import axios from "axios";

const client = process.env.REACT_APP_TWITCH_API_CLIENT
const secret = process.env.REACT_APP_TWITCH_API_SECRET

export const getAccess = async () => {
    const res = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client}&client_secret=${secret}&grant_type=client_credentials`)
    const accessToken = res.data.access_token
    return accessToken;
}

const getStreamers = async (token, streamerName) => {
    const res = await axios.get(`https://api.twitch.tv/helix/search/channels?query=${streamerName}`, {
        headers: {
            'Client-ID': client,
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data.data
}

export const getStreamer = async (token, streamerName) => {
    let streamerList = await getStreamers(token, streamerName)

    for (let x of streamerList) {
        if (x.display_name.toLowerCase() === streamerName.toLowerCase()) return x
    }
    return null;
}

export const getStreamersFromList = async (token, nameList) => {
    let listOfStreamers = []

    if (nameList !== undefined) {
        for (let x of nameList) {
            getStreamer(token, x).then((e) => {
                if (e != null) listOfStreamers.push(e)
            })
            return listOfStreamers;
        }
    }
}


