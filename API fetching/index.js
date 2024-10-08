// //fetch = function used for making HTTP request to frtch resource.
// //        (JSON style data,images,files)
// //        Simplifies asynchronous data fetchinhg in JS and used for interacting with API's.
// // To reterive and send data
// //          fetch(url)

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// //   .then((response) => response.json())
// .then((response) => {
//     if(!response.ok){
//         throw new Error("Could not fetch resource")
//     }
//     return response.json();
// })
// //   .then((data) => console.log(data))
// .then((data) => console.log(data.weight))
//   .catch((error) => console.log(error));
fetchData();
async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }

    catch(error){
        console.error(`Error fetching data: `);
    }
}