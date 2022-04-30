const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const games = document.querySelectorAll('.game')
const date = new Date()
const year = 2022

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)


function onLoad(){
  // past game disable
  games.forEach(e=>{
    e.childNodes.forEach(c=>{
      if(c.className==='game-time'){
        c.childNodes.forEach(t=>{
          if(t.className==='date-time'){
            let [m,d]=t.textContent.split(' ')[0].split('/')
            let gameDate = new Date(year,m-1,d,18)
            if(Date.parse(date)>Date.parse(gameDate)) {
              e.style.color = '#aaa'
              e.style.backgroundColor = '#666'
              return
            }
          }
        })        
      }
    })
  })


}