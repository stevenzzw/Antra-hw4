const main = document.querySelector("#root");


fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
    const card = json.map(item => {
      return `
                <section class="card">
                  <article class="card__detail">         
                    <h1 class="card_title">${item.title}</h1>
                    <p class="card_content">${item.body}</p>
                  </article>
                  
                  <footer>Post Id: ${item.id}</footer>
                </section>
                
            `
    }).join("");

    main.innerHTML = card;
  })