const loadPhone = async(searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    // console.log(data.data);
    displayPhones(phones, isShowAll)
    
}

const displayPhones = (phones, isShowAll) => {

    const phoneConatiner = document.getElementById("phone-container")
    phoneConatiner.textContent = ""

    const showAllBtn = document.getElementById("show-more-btn")
    if(phones.length>12 && !isShowAll){
        showAllBtn.classList.remove("hidden")
    }else{
        showAllBtn.classList.add("hidden")
    }

    if(!isShowAll){
        phones = phones.slice(0,12)
    }

    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement("div")
        phoneCard.classList = `card bg-white text-black m-2 p-4 shadow-xl`
        phoneCard.innerHTML = `
             <figure class="px-10 pt-10">
                <img
                    src="${phone.image}"
                    alt="Shoes"
                    class="rounded-xl" />
            </figure>
                <div class="card-body items-center text-center">
                     <h2 class="card-title">${phone.phone_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button onclick = "hundleShowDetails('${phone.slug}')" class="btn btn-primary text-white">Show Details</button>
                    </div>
                </div>`

        phoneConatiner.appendChild(phoneCard)
        
    });
    toggleLoadingSpinner(false)
}

const hundleShowDetails = async(id) => {
    // console.log("click show", id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(phone)
}

const showPhoneDetails = (phone) => {
    console.log(phone);

    const phoneName = document.getElementById("show-detail-phone-name")
    phoneName.innerHTML = phone.name;

    const showDetailsContainer = document.getElementById("show-detail-container");
    showDetailsContainer.innerHTML = `
        <img class="max-w-[220px]" src="${phone.image}" alt="Shoes" class="bg-white" />
        <p class="text-xl"><span class="text-green-700">Stroage: </span> ${phone?.mainFeatures?.storage} </p>
        <p class="text-xl"><span class="text-green-700">Display: </span> ${phone?.mainFeatures?.displaySize} </p>
    `

    my_modal_5.showModal()
}
    
const hundleSerach = (isShowAll) => {

    toggleLoadingSpinner(true)

    const searchField = document.getElementById("search-field");
    const searchVal = searchField.value;
    console.log(searchVal);

    loadPhone(searchVal, isShowAll)
    
}

const toggleLoadingSpinner = (isLoading) => {
    const loader = document.getElementById("loading-spin")
    if(isLoading){
        loader.classList.remove("hidden")
    }else{
        loader.classList.add("hidden")
    }
}

const hundleShowAll = () => {
    hundleSerach(true)
}

// loadPhone()