const loadPhone = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
    
}
const displayPhones = (phones, isShowAll) => {

    const phoneCOntainer = document.getElementById("phone-container")
    phoneCOntainer.textContent = ""

    const showAllBtn = document.getElementById("show-all-btn")
    if(phones.length>10 && isShowAll){
        showAllBtn.classList.remove("hidden")
    }else{
        showAllBtn.classList.add("hidden")
    }

    if(!isShowAll){
        phones = phones.slice(0,12)
    }

    phones.forEach(phone=>{
    console.log(phone);

    const PhoneDiv = document.createElement("div")
    PhoneDiv.classList = `card card-compact bg-base-100 p-4 shadow-xl bg-white text-black`
    PhoneDiv.innerHTML = `
            <figure>
                <img src="${phone.image}"
                    alt="Shoes" class="mt-4" />
                    </figure>
                    <div class="card-body flex flex-col justify-center items-center gap-4 p-4">
                         <h2 class="card-title">${phone.phone_name}</h2>
                         <p>${phone.slug}</p>
                         <div class="card-actions flex w-full justify-center">
                            <button class="btn btn-primary text-white">Show Details</button>
                        </div>
                    </div>
    ` 
    phoneCOntainer.appendChild(PhoneDiv)
    })
    toggleLoadingSpinner(false)
}
// loadPhone()

const hundleSearch = (isShowAll) => {

    toggleLoadingSpinner(true)

    const field = document.getElementById("search-field")
    const fieldValue = field.value;
    console.log(fieldValue);
    loadPhone(fieldValue, isShowAll)
}

// const hundleSearch2 = () => {
//     const searchField = document.getElementById("search-field2")
//     const searchText = searchField.value;
//     loadPhone(searchText)
// }

const toggleLoadingSpinner = (isLoading) => {
    const spinner = document.getElementById("loading-spiner")
    if(isLoading){
        spinner.classList.remove("hidden")
    }else{
        spinner.classList.add("hidden")
    }
}

const hundleShowAll = () => {
    hundleSearch(true)
}