let mainDescription = document.querySelector(".main-container .heading-container #mainDescription");
// console.log(mainDescription);
// mainDescription.classList.replace("d-block" , "d-none");
mainDescription.classList.remove("d-block");
mainDescription.classList.add("d-none");
let mainButtonsContainer = document.querySelector(".main-container .heading-container #mainButtonsContainer");
// console.log(mainButtonsContainer);
mainButtonsContainer.classList.add("mt-4");
let displayingMainDescriptionButton = document.querySelector(".main-container .heading-container #mainButtonsContainer #displayingMainDescriptionBtn");
// console.log(displayingMainDescriptionButton)
let userName = window.prompt("Please Enter The User Name Is : ")
// console.log(userName);
if(!userName){
    window.alert("Please Enter The Full Name");
    // console.log(userName);
    userName = "guest";
    // console.log(userName);
}
// console.log(userName);
async function displayingMainDescription(){
    // console.log("HEllllllllloooooooooo");
    await new Promise((resolve) => setTimeout(resolve , 500));
    // mainDescription.classList.replace("d-none" , "d-block");
    mainDescription.classList.remove("d-none");
    mainDescription.classList.add("d-block");
    mainDescription.innerHTML = `hello everyOne! , and welcome &quot;${userName}&quot; to our responsive random advanced quotes generation , you can change between different quotes generation.`;
    mainButtonsContainer.classList.remove("mt-4");
};
// displayingMainDescriptionButton.addEventListener("click" , displayingMainDescription);
displayingMainDescriptionButton.addEventListener("click" , async () => {
    await new Promise((resolve) => setTimeout(resolve , 1500));
    displayingMainDescription();
    // displayingMainDescriptionButton.classList.replace("d-inline" , "d-none");
    displayingMainDescriptionButton.classList.remove("d-inline");
    displayingMainDescriptionButton.classList.add("d-none");
    // mainButtonsContainer.classList.replace("justify-content-between" , "justify-content-center");
    mainButtonsContainer.classList.remove("justify-content-between");
    mainButtonsContainer.classList.add("justify-content-center");
    mainButtonsContainer.classList.add("gap-3")
})
let removingMainDescriptionButton = document.querySelector(".main-container .heading-container #mainButtonsContainer #removingMainDescriptionBtn");
// console.log(removingMainDescriptionButton);
async function removingMainDescription(){
    await new Promise((resolve) => setTimeout(resolve , 500));
    // console.log("HEllllloooooooooo");
    // mainDescription.classList.replace("d-block" , "d-none");
    mainDescription.classList.remove("d-block");
    mainDescription.classList.add("d-none")
    mainButtonsContainer.classList.add("mt-4");
};
// removingMainDescriptionButton.addEventListener("click" , removingMainDescription);
removingMainDescriptionButton.addEventListener("click", async () => {
    await new Promise((resolve) => setTimeout(resolve , 1500));
    // removingMainDescription();
    if(mainDescription.classList.contains("d-none")) return;
    removingMainDescription();
    // removingMainDescriptionButton.classList.replace("d-inline" , "d-none");
    removingMainDescriptionButton.classList.remove("d-inline");
    removingMainDescriptionButton.classList.add("d-none");
    mainButtonsContainer.style = "width: 80%;"
    displayingMainDescriptionButton.classList.replace("d-none", "d-block");
    // displayingMainDescriptionButton.classList.remove("d-none");
    // displayingMainDescriptionButton.classList.add("d-inline");
});
// let generationNewQuoteButton = document.querySelector(".main-container #mainButtonsContainer #generationNewQuoteBtn");
// // console.log(generationNewQuoteButton);
// let mainQuoteElementsContainer = document.querySelector(".main-container #mainQuoteElementsContainer");
// // console.log(mainQuoteElementsContainer); 
// async function generationNewRandomQuote(){
//     await new Promise((resolve) => setTimeout(resolve , 2000));
//     generationNewQuoteButton.disabled = true;
//     // console.log("Helloooooo");
//     // mainQuoteElementsContainer.classList.replace("d-none" , "d-block");
//     mainQuoteElementsContainer.classList.remove("d-none");
//     mainQuoteElementsContainer.classList.add("d-block");
//     try{
//         const fetchingData = await fetch("https://dummyjson.com/quotes/random");
//         // console.log(fetchingData);
//         if(!fetchingData.ok){
//             throw new Error("This Is A Network Error.");
//         }
//         const data = await fetchingData.json();
//         // console.log(data);
//         // console.log(data.id);
//         // console.log(data.author);
//         // console.log(data.quote);
//         const quoteID = document.createElement("p");
//         console.log(quoteID);
//         quoteID.class = "quote-author main-family text-capitalize bg-mint text-brown my-0 trans-sec p-1 w-fit mx-auto rounded-3 position-relative";
//         // console.log(quoteID);
//         mainQuoteElementsContainer.appendChild(quoteID);
//         // mainQuoteElementsContainer.innerHTML = `<p class="quote-author main-family text-capitalize bg-mint text-brown my-0 trans-sec p-1 w-fit mx-auto rounded-3 position-relative">${data.author}</p>`  
//     }
//     catch(error){
//         let errorMessage = error.message
//         console.log(errorMessage)
//     }
//     finally{
//         generationNewQuoteButton.disabled = false;
//     }
// }
// generationNewQuoteButton.addEventListener("click" , generationNewRandomQuote);
