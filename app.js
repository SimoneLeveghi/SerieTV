const series = document.querySelectorAll(".serie");

let pageNum = 1;
for(let serie of series)
{
    const url = `./pages/serie${pageNum++}.html`;

    serie.addEventListener("click", () => {
        window.location.href = url;
    });
}