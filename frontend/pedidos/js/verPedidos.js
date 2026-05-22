import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

let rol = sessionStorage.getItem('user_rol')

async function init(){
    if(rol == "admin"){

    }
    else{
        window.location.href = `${web}/index.php`;
    }
}