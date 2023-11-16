const button=document.querySelector(".get-random");
const spanContainer=document.querySelector(".joke");
const url="https://official-joke-api.appspot.com/random_joke"

async function randomJoke(){
    try{
        const response=  await fetch(url)
        const data=await response.json();
        let span=document.createElement("span")
        span.textContent=data.setup,
        spanContainer.appendChild(span)
        let spaN=document.createElement("p")
        spaN.textContent=data.punchline
        spanContainer.appendChild(spaN)
        console.log(data)

    }catch (error){
        console.log(error)
    }

}
button.addEventListener("click",randomJoke)






const dogImage=document.querySelector(".img");
const fetchButton=document.querySelector(".btn")
loader=document.querySelector(".loader")

fetchButton.addEventListener('click', () => {
    fetchDogImage()
        .then((imageSrc) => {
            dogImage.src = imageSrc;
        })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
            showErrorMessage();
        });
});

function fetchDogImage() {
    showLoader();
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then((data) => {
            hideLoader();
            return data.message;
        });
}

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

function showErrorMessage() {
    dogImage.src = '';
    dogImage.alt = 'Oops, something went wrong!';
}
