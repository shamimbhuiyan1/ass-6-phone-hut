const main = document.getElementById('main');

/* search button linked  */

const searchButton = ()=>{
    const searchBox = document.getElementById('input-value')
    const contentbox = document.getElementById('content-box')
    const searchText = searchBox.value;

    // error handling part
    
    if( searchText=='' ){
        contentbox.innerText='Your Product is not found'
        searchBox.value=''
        main.innerHTML=''
    } 
    
     else   {
         
        main.innerHTML=''
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data.slice(0,20)))
        searchBox.value=''
        contentbox.innerHTML=''
       }

}

/* phones display section */  

const displayPhones = (phones) =>{
    const contentbox = document.getElementById('content-box')

    // error handling part


    if(phones[0]==null){
        contentbox.innerText='Give valid information'
        
    }
    else{
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
}

// phone details part

const phoneDetails =(id) =>{
     console.log(id)
    let url = `https://openapi.programming-hero.com/api/phone/${id}`

    console.log(url)
    fetch(url)

    .then(res =>res.json())
    .then(data =>displayPhonesDetailes(data.data))
   
    }
    
    
    const displayPhonesDetailes = phone =>{
        console.log(phone)
        
    const phoneDetails=document.getElementById('phone-details');
    phoneDetails.textContent=''

    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML=`

    <div class="card mb-3 m" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-7">
      <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-5">
      <div class="card-body">
        <h5 class="card-title">Name:${phone.name}</h5>

        <p class="card-text">Chipset:${phone.mainFeatures.chipSet}</p>
        <p class="card-text">Display Size:${phone.mainFeatures.displaySize}</p>
        <p class="card-text">Memory:${phone.mainFeatures.memory}</p>
        <p class="card-text">Sensors:${phone.mainFeatures.sensors}</p>
        <p class="card-text">Storage:${phone.mainFeatures.storage}</p>
        <p class="card-text">Bluetooth:${phone.others.Bluetooth}</p>
        <p class="card-text">Bluetooth:${phone.others.WLAN}</p>
        <p class="card-text">Bluetooth:${phone.others.NFC}</p>
        <p class="card-text">Bluetooth:${phone.others.Radio}</p>
        <p class="card-text">Bluetooth:${phone.others.USB}</p>
        <p class="card-text">Bluetooth:${phone.others.GPS}</p>
        <p class="card-text">Release Date:${phone.releaseDate}</p>


        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    
    

    `
    phoneDetails.appendChild(div)

}