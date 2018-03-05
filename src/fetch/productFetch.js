"use strict"
import {CARTSURL} from "../constants/productConstants";
export default class IndexModel {
    findall(cb){
    	console.log(CARTSURL)
        fetch(CARTSURL).then((resp)=>{
            resp.json().then((data)=>{
                cb(data)
            })
        })
    }
}

