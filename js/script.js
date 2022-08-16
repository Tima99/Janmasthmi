    
const _name = document.querySelector('.name') 

const _username = window.location.search.split('=')[1].replaceAll('_', '<br/>');
_name.innerHTML = _username;

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
    ele.style.display = 'none'
    document.querySelector('.congrats-box').style.display ='flex'
    document.querySelector('.inputs-box').style.display ='flex'

}