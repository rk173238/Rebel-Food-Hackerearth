import Axios from "axios"
import { url } from "../Constant/urlConstant"
export const imageService={
    fetchImageData
}
function fetchImageData(){
    let api=url.image;
    return Axios.get(api).then(res=>res.data)
}