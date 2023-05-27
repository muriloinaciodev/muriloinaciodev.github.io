var tabs = document.getElementsByClassName('hbtn')

function changeTab(tab) {
    for (let i = 0; i < tabs.length; i++){
        tabs[i].style.borderBottom = 'none'
    }
    tabs[tab-1].style.borderBottom = '2px solid darkorange'
    
    for (let i = 0; i < 3; i++){
        try {
            document.getElementById(`tab${i}`).style.display = 'none'
            console.log(`tab${i}`)
        } catch{
            console.log()
        }
    }
    document.getElementById(`tab${tab-1}`).style.display = 'grid'
    console.log(`tab${tab-1}`)
}