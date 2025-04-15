/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */










// main data array
let shows = [];
// add data using helper function
function addShow(title, image, stars) {
  shows.push({ title, image, stars });
}

//Star gazing spots will be put here
addShow("Joshua Tree National Park", "images/joshua-tree.jfif", 5);
addShow("Griffith Observatory", "images/griffith-stars.jpg", 1);
addShow("Mount Wilson Observatory", "images/mount-wilson.jfif", 2);
addShow("Garvey Ranch Park In Monterey Park", "images/star-party.jpg", 1);
addShow("Death Valley National Park", "images/death-valley.jfif", 5);
addShow("Borrego Springs", "images/borrego-springs.jpg", 4);
addShow("Malibu Creek State Park", "images/malibu-creek.png", 3);



// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(filtered = shows) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (const show of filtered) {
    const nextCard = templateCard.cloneNode(true); // typo fixed
    editCardContent(nextCard, show);               // variable corrected
    cardContainer.appendChild(nextCard);           // typo fixed
  }
}


function editCardContent(card, show) {
  card.style.display = "block";

  card.querySelector("h2").textContent = show.title;

  const img = card.querySelector("img");
  img.src = show.image;
  img.alt = `${show.title} Poster`;

  const ul = card.querySelector("ul");
  ul.innerHTML = `
  
    <li><strong>Star Visibility:</strong> ${"⭐".repeat(show.stars)}</li>
  `;
}

function sortCatalog(criteria) {
  let sorted = [...shows];

  if (criteria === "stars-desc") {
    sorted.sort((a, b) => b.stars - a.stars);
  } else if (criteria === "stars-asc") {
    sorted.sort((a, b) => a.stars - b.stars);
  }

  showCards(sorted);
}









// DOM Ready: load cards
document.addEventListener("DOMContentLoaded", showCards);

// Quote button
function quoteAlert() {
  alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

// Remove last card
function removeLastCard() {
  shows.pop();
  showCards();
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-input");

  if (input) {
    input.addEventListener("keyup", () => {
      const term = input.value.toLowerCase();
      const filtered = shows.filter(show =>
        show.title.toLowerCase().includes(term)
      );
      showCards(filtered);
    });
  }

  showCards(); // still display all cards on load
});




