function loadNews() {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displaNews(data));
}

const newsContainer = document.getElementById("news_categorie_container");
function displaNews(news) {
  const categories = news.data.news_category;

  categories.forEach((categorie) => {
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("news");
    // console.log(categorie.category_name);
    newsDiv.innerHTML = `  
 
  <div class="container-fluid">


          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#">${categorie.category_name}</a>
              </div>
          </div>
      </div>
    `;
    newsContainer.appendChild(newsDiv);
  });
}

/* ------------------------------------------------------------------------------------------------ */

function loadAuthor() {
  fetch("https://openapi.programming-hero.com/api/news/category/01")
    .then((res) => res.json())
    .then((data) => loadAuthor(status));
}
function loadAuthor() {
  fetch("https://openapi.programming-hero.com/api/news/category/01")
    .then((res) => res.json())
    .then((data) => displayAuthor(data));
}
const authorContainer = document.getElementById("autohor_container");
function displayAuthor(authorInformations) {
  const informations = authorInformations.data;
  informations.forEach((information) => {
    const informationDiv = document.createElement("div");
    informationDiv.classList.add("info");

    console.log(information.details);
    informationDiv.innerHTML = `
    <div class="m-5 row g-0 mb-3 ">
    <div class="col-md-4">
        <img src="${information.image_url}" class="img-fluid rounded-start"
            alt="...">
    </div>
    <div class=" col-md-8 shadow p-2 mb-5 bg-body-tertiary rounded">
        <div class="m-5 card-body">
            <h5 class="card-title fs-2 fw-medium mb-3 ">${information.author.name}</h5>
            <p class="card-text text-body-secondary fw-medium">${information.details}
                .</p>
        </div>
    </div>
</div>
    `;
    authorContainer.appendChild(informationDiv);
  });
}
/* ----------------------------------------------------------------------------------- */
function loadName() {
  fetch(
    "https://openapi.programming-hero.com/api/news/category/%7Bcategory_id%7D"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}
loadName();
loadAuthor();
loadNews();
