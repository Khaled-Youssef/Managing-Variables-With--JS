const backgroundColorInput = document.getElementById('bgColor');
backgroundColorInput.addEventListener("change", changeBgColor)
function changeBgColor(){
    document.querySelector(':root').style.setProperty ('--bgColor', backgroundColorInput.value)
}

const inputs = document.querySelectorAll("input")
inputs.forEach(input=>input.addEventListener("change", handleUpdate))
inputs.forEach(input=>input.addEventListener("mousemove", handleUpdate))

inputs.forEach(input => {
    getInitValues(input)
});

function getInitValues(inputName){
    const input = document.querySelector(`input[name="${inputName.name}"]`)
    const valueSpan = document.querySelector(`.highlighted.${inputName.name} .value`)
    const inputValue = input.value
    valueSpan.innerHTML = inputValue
    document.querySelector(':root').style.setProperty(`--${inputName.name}`, inputName.value)
}


function handleUpdate(){
    const input = document.querySelector(`input[name="${this.name}"]`)
    const valueSpan = document.querySelector(`.highlighted.${this.name} .value`)
    const inputValue = input.value
    valueSpan.innerHTML = inputValue
    document.querySelector(':root').style.setProperty(`--${input.name}`, inputValue)

}


const copyrightsDiv = document.createElement("div")
copyrightsDiv.innerHTML +=   '<div class="copyrights">Made by <a href="https://github.com/Khaled-Youssef/" target=\"_blank\"><img src="img/joe-dl-logo-w.png" alt="Khaled Youssef" srcset=""></a></div>'
document.querySelector('body').appendChild(copyrightsDiv, 'beforeend')