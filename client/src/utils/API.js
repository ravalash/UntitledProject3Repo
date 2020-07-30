import axios from "axios";

export default {
    searchGames: function (query) {
        return axios.get("/api/igdb/gameSearch/" + query)
    },
    addItem: function (game) {
        console.log(game)
        return axios.post("/api/item", game)
    }
    // searchGames: function (query) {
    //     return axios({
    //         url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games',
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'user-key': process.env.REACT_APP_IGDB_KEY,
    //         },
    //         data: 'fields name,id; search "' + query + '";'
    //     }).then(res => { return res.data })
    // }
}
