
function listOfColours(colours) {
  // Write your code here...
  const contentDiv = document.getElementById("content");
  const select = document.createElement("select");
  const paragraphShowen = document.createElement("p");
  const theFirstColour= colours[0];    //برای اینکه وقتی سلکت روی اولین رنگ هست هم رنگ پاراگراف عوض بشه 
  paragraphShowen.textContent = `You have selected: ${theFirstColour}`;
  paragraphShowen.style.color= theFirstColour;

  colours.forEach(colour => {
    const option = document.createElement("option");
    option.value = colour; 
    option.textContent = colour; 
    select.appendChild(option); 
  });

  select.addEventListener("change", (event) => {
    const selectedColour = event.target.value; //رنگ انتخابی را توی کانست میریزیم
    paragraphShowen.textContent = `You have selected: ${selectedColour}`; 
    paragraphShowen.style.color = selectedColour; 
  });

  contentDiv.appendChild(select);
  contentDiv.appendChild(paragraphShowen);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
listOfColours(colours);