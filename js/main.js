/**live section */
document.getElementById('Hire').addEventListener('click',
function() {
document.querySelector('.bg').style.display = 'flex';});

document.querySelector('.exit').addEventListener('click',
function() {
document.querySelector('.bg').style.display = 'none';});


/**money aspect */
const containerTwo = documnet.querySelector('.content-container-2')
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    containerTwo.classList.toggle("toggle");
	
})