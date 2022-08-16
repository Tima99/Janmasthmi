    
const _name = document.querySelector('.name')

const _username = window.location.search.split('=')[1] && window.location.search.split('=')[1].replaceAll('_', '<br/>');
_name.innerHTML = _username || "नाम लिखें";

function see(btn){
    const __name = btn.parentElement.querySelector('input').value
    btn.parentElement.querySelector('input').value = ''
    _name.innerHTML =  __name   
    window.scrollTo(0, 0)
    btn.parentElement.style.display = 'none'
    const wapp = btn.parentElement.nextElementSibling
    wapp.style.display = 'flex';
    wapp.href = `whatsapp://send?text= **${__name} ने आपके लिए कुछ भेजा है %0Aजल्दी से *नीली लाइन* को टच करके देखो  %0A👇 👇%0Aclick-karo.site/?n=${__name.replaceAll(' ','_')}`
    console.log(wapp.href)
}

function touch(ele){
    music.song1.play();  

    ele.style.display = 'none'
    document.querySelector('.congrats-box').style.display ='flex'
    document.querySelector('.inputs-box').style.display ='flex'

}

// Music added

var music = {
    song1 : new Audio(), 
    song2 : new Audio(),
    song3 : new Audio()
}
music.song1.src = './sound/Krishna_Janmashtami.mp3'
music.song2.src = './sound/happy_birthday2u.mp3'
music.song3.src = './sound/Nanad_ke_Nanad_Bhayo.mp3'

music.song1.addEventListener('ended', ()=>{
    music.song2.play()
})
music.song2.addEventListener("ended", ()=>{
    music.song3.play()
})
music.song3.addEventListener("ended", ()=>{
    music.song1.play()
})