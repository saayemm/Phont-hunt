const loadPhone = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    const data = await res.json()
    const phones = data.data
    // console.log(data.data);
    displayPhones(phones)
    
}

const displayPhones = phones => {
    const phoneConatiner = document.getElementById("phone-container")
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement("div")
        phoneCard.classList = `card bg-base-100 p-4 shadow-xl`
        phoneCard.innerHTML = `
             <figure class="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    class="rounded-xl" />
            </figure>
                <div class="card-body items-center text-center">
                     <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>`

        phoneConatiner.appendChild(phoneCard)
    });
}
    

loadPhone()