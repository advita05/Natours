let links = document.getElementsByClassName('navigation__item');
for (let link of links)
{
    link.addEventListener("click", (event) => {
        document.getElementById('navi__toggle').checked = false;
    });
}