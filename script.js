const loadPhone = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
    
}
const displayPhones = phones => {

    const phoneCOntainer = document.getElementById("phone-container")

    phones.forEach(phone=>{
    console.log(phone);

    const PhoneDiv = document.createElement("div")
    PhoneDiv.classList = `card card-compact bg-base-100 w-96 shadow-xl bg-white text-black`
    PhoneDiv.innerHTML = `
            <figure>
                <img src="${phone.image}"
                    alt="Shoes" class="mt-4" />
                    </figure>
                    <div class="card-body flex flex-col justify-center items-center gap-2 p-4">
                         <h2 class="card-title">${phone.phone_name}</h2>
                         <p>${phone.slug}</p>
                         <div class="card-actions flex w-full justify-center">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
    ` 
    phoneCOntainer.appendChild(PhoneDiv)
    })
}
loadPhone()

const hundleSearch = () => {
    console.log("see mobile");
    
}