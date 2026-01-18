const nightToggle = document.querySelector(".nightMode");

document.querySelector(".nightMode").addEventListener("change", () => {
    document.body.classList.toggle("dark", nightToggle.checked);
});
