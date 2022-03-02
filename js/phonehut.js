const main = document.getElementById('main');

/* search button linked  */

const searchButton = ()=>{
    const searchBox = document.getElementById('input-value')
    const contentbox = document.getElementById('content-box')
    const searchText = searchBox.value;
    if( searchText=='' ){
        contentbox.innerText='Your Product is not found'
        searchBox.value=''
        main.innerHTML=''
    } 
    
     else   {
         
        main.innerHTML=''
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
        searchBox.value=''
        contentbox.innerHTML=''
       }

}

/* phones display section */  

const displayPhones = (phones) =>{
    
    for(const phone of phones){
        const div = document.createElement('div')
        div.classList='col-lg-4 '
        
        div.innerHTML=`
                <div class="card" style="width: 18rem;">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h3 class="card-title">Name:${phone.phone_name}</h3>
                    <p class="card-text">Brand: ${phone.brand}</p>
                    <button onclick="phoneDetails('${phone.slug}')" href="#" class="btn btn-primary">See Details</button>
                    </div>
            </div>
        `

        main.appendChild(div)
    }
}



const phoneDetails = (data)=>{
   
   const phoneId = data.slug;
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    
    fetch(url)
    .then(res =>res.json())
    .then(data => displayPhonesDetailes(data.data))
}


const displayPhonesDetailes = () =>{
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML=`
    <img src="${phoneId.image}" class="card-img-top" alt="...">
    <div class="card-body">
    `
}