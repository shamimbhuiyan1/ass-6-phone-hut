const main = document.getElementById('main');

/* search button linked  */

const searchButton = ()=>{
    const input = document.getElementById('input-value')
    const inputValue = input.value;
    const contentbox = document.getElementById('content-box')
    if(inputValue !==''){
        contentbox.innerText='Your Product found'
        input.value=''
    } 
    else if(inputValue==''){
        contentbox.innerText='Your Product is not found'
        input.value=''
    }
}