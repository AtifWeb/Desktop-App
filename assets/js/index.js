// import {Accounts} from './Utils.js'
const toggleoption=Query('.toggle-option');
function Query(element){
    return document.querySelector(element)
}

function QueryAll(element){
    return document.querySelectorAll(element)
}

const ActivateWebookOption=e=>{
    toggleoption.classList.toggle('webhookactive')
}








// Event Listeners
toggleoption.addEventListener('click',ActivateWebookOption)
