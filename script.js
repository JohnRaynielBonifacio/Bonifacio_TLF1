let lights=document.querySelectorAll(".light"),
light=0;

setInterval(() => {
    changeLight();
}, 1250);

function changeLight(){
    lights[light].classList="light";
    light++;

    if(light>2){
        light=0;
    }
    const selectLight=lights[light];
    selectLight.classList.add(selectLight.getAttribute("color"));
}