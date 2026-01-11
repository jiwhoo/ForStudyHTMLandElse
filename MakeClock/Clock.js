const clock_container = document.getElementById("clock_container")

for (var i = 0; i < 30; i++){
    const clock_lines = document.createElement("clock_container")
    clock_lines.classList.add('line')
    clock_lines.style.transform = 'rotate(${6*i}deg)'
    
}