async function loadNews() {

    try {

        const response = await fetch("data/news.json");
        const news = await response.json();

        const container = document.getElementById("latest-news");

        if (!container) return;

        container.innerHTML = "";

        news.forEach(item => {

            container.innerHTML += `
                <div class="news-card">
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.summary}</p>
                    <a href="article.html?id=${item.id}">Read More</a>
                </div>
            `;

        });

    } catch (error) {

        console.error("Unable to load news.", error);

    }

}

loadNews();
