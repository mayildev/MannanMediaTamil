let newsList = [];

function publishNews() {

    const title = document.getElementById("title")?.value || "";
    const category = document.getElementById("category")?.value || "";
    const image = document.getElementById("image")?.value || "";
    const content = document.getElementById("content")?.value || "";

    if (!title || !category || !content) {
        alert("Please fill all required fields.");
        return;
    }

    const news = {
        id: Date.now(),
        title: title,
        category: category,
        image: image,
        summary: content.substring(0,120) + "...",
        content: content,
        date: new Date().toLocaleDateString()
    };

    newsList.push(news);

    localStorage.setItem("mannanNews", JSON.stringify(newsList));

    alert("News saved successfully!");

}

window.onload = function(){

    const saved = localStorage.getItem("mannanNews");

    if(saved){
        newsList = JSON.parse(saved);
    }

};
