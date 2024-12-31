const loadPhone = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    // console.log(data.data);
    displayPhones(phones)
    
}

const displayPhones = phones => {

    const phoneConatiner = document.getElementById("phone-container")
    phoneConatiner.textContent = ""

    const showAllBtn = document.getElementById("show-more-btn")
    if(phones.length>12){
        showAllBtn.classList.remove("hidden")
    }else{
        showAllBtn.classList.add("hidden")
    }

    phones = phones.slice(0,12)

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
                        <button class="btn btn-primary text-white">Show Details</button>
                    </div>
                </div>`

        phoneConatiner.appendChild(phoneCard)
    });
}
    
const hundleSerach = () => {
    const searchField = document.getElementById("search-field");
    const searchVal = searchField.value;
    console.log(searchVal);

    loadPhone(searchVal)
    
}

// loadPhone()