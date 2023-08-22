import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '28e350e97ad44e9dbcd6cb5e30f50a79'
    }
})