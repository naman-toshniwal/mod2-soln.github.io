//Creating the backdrop

const predSubmitButton = document.getElementById('predButton');
const outModalClose = document.getElementById('out_modal_close');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function backdrop_close (){
    const backdrop = document.getElementById("backdrop");
    const outputModal =  document.getElementById("output_modal");

    outputModal.style.animation = "fadeOut 700ms";
    backdrop.style.animation = "fadeOut 700ms";

    await sleep(700);

    backdrop.style.display = "none";
    outputModal.style.display = "none";
    outputModal.style.animation = "fadeIn 700ms";
    backdrop.style.animation = "fadeIn 700ms";
}

const backdrop = () => {
    const backdrop = document.getElementById("backdrop");
    const outputModal =  document.getElementById("output_modal");

    backdrop.style.display = "block";
    outputModal.style.display = "flex";
}

outModalClose.addEventListener("click", backdrop_close);
predSubmitButton.addEventListener("click", backdrop);