function MakeAnimeCard(title, img, score, genre, description) {
  let cardEl = document.createElement("article");
  cardEl.className = "anime__card";

  let imgEl = document.createElement("img");
  imgEl.className = "anime__img";
  imgEl.src = img;
  imgEl.alt = "anime banner";
  cardEl.appendChild(imgEl);

  let containerEl = document.createElement("div");
  containerEl.className = "anime__info";

  let titleEl = document.createElement("h2");
  titleEl.className = "anime__title";
  titleEl.innerText = title;
  containerEl.appendChild(titleEl);

  let scoreEl = document.createElement("div");
  scoreEl.className = "anime__rating";
  scoreEl.innerText = "Score: " + score;
  containerEl.appendChild(scoreEl);

  let genreEl = document.createElement("p");
  genreEl.className = "anime__genre";
  genreEl.innerText = "Genre: " + genre;
  containerEl.appendChild(genreEl);

  let descEl = document.createElement("p");
  descEl.className = "anime__description";
  descEl.innerText = description;
  containerEl.appendChild(descEl);

  cardEl.appendChild(containerEl);

  let animeBody = document.getElementById("anime__div");
  animeBody.appendChild(cardEl);
}

const url = "https://api.jikan.moe/v4/top/anime?type=tv";

function RNG() {
  return Math.floor(Math.random() * (24 - 0 + 1) + 0);
}

async function fetchAnime() {
  let response = await fetch(url);
  let json = await response.json();
  // ------------------------------------
  for (let i = 0; i < 12; i++) {
    let num = RNG();

    let genreArray = [];

    arr = json.data[num].genres;
    for (const element of arr) {
      genreArray.push(element.name + " ");
    }
    MakeAnimeCard(
      json.data[num].title,
      json.data[num].images.webp.image_url,
      json.data[num].score,
      genreArray,
      json.data[num].synopsis
    );
  }
}

fetchAnime();
