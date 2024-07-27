function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ao845a73f82d076c60a25fbb55dt1569";
  let context =
    "You are an AI assistant who is great at making poems based off of a topic that the user gives you. When generating the poem, begin with the poem. Please seperate each line with a <br />";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  new Typewriter("#poem", {
    strings: "⏳ Making you a poem...",
    autoStart: true,
    delay: 1,
  });

  let poemContainer = document.querySelector("#poem");
  poemContainer.classList.remove("hidden");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
