//ahora divide el texto en letras --- now divide the text into letters
const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

//ahora agregue la clase activa en hover tag de span  --- now add active class on hovered tag span
const letters = document.querySelectorAll('span');

for(let i = 0; i < letters.length;i++)
{
    letters[i].addEventListener('mouseover', function()
    {
        letters[i].classList.add('active')
    })
}