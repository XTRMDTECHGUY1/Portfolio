/**live section */
document.getElementById('button').addEventListener('click',
function() {
document.querySelector('.bg-modal').style.display = 'flex';});

document.querySelector('.close').addEventListener('click',
function() {
document.querySelector('.bg-modal').style.display = 'none';});


/**money aspect */
const containerTwo = documnet.querySelector('.content-container-2')
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    containerTwo.classList.toggle("toggle");
})

var typed= new Typed(".text",{
	Strings:{'Web Developer' , 'Software Developer' , 'Data Scientist' ,  'Cyber Security Officer' ,  'Hard & Software Engineer'
}, 
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true

});

