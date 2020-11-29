import Axios from "axios"
import { url } from "../Constant/urlConstant"

export const dataService={
    fetchBeerData
}
function fetchBeerData(){
    let api=url.data;
    return Axios.get(api).then(res=>res.data)
}