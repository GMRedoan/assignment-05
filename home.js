//  love btn clicked function

  function addFavorite (id){
    document.getElementById(id).addEventListener('click', function(){
    const loveCount = parseInt(document.getElementById('love-count').innerText)
    const newLoveCount = loveCount + 1
    document.getElementById('love-count').innerText = newLoveCount
    })
   }
  addFavorite('love-btn')
  addFavorite('love-btn2') 
  addFavorite('love-btn3') 
  addFavorite('love-btn4') 
  addFavorite('love-btn5') 
  addFavorite('love-btn6') 
 
//   coin cutting and alert function

    document.getElementById('call1').addEventListener('click', function(){
    const coinCount = parseInt(document.getElementById('coin').innerText)
     if(coinCount < 20){
        alert('Not Enough Coin')
        return;
     }
     alert('📞Calling: National Emergency Number - 999')
     const newCoin = coinCount - 20
    document.getElementById('coin').innerText = newCoin

        const data = {
        name: 'National Emergency Number',
        name2: '999',
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
  })

    document.getElementById('call2').addEventListener('click', function(){
    const coinCount = parseInt(document.getElementById('coin').innerText)
     if(coinCount < 20){
        alert('Not Enough Coin')
        return;
     }
     alert('📞Calling: Police Helpline Number - 999')
     const newCoin = coinCount - 20
    document.getElementById('coin').innerText = newCoin

        const data = {
        name: 'Police Helpline Number',
        name2: '999',
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data)

 })

    document.getElementById('call3').addEventListener('click', function(){
    const coinCount = parseInt(document.getElementById('coin').innerText)
     if(coinCount < 20){
        alert('Not Enough Coin')
        return;
     }
     alert('📞Calling: Fire Service Number - 999')
     const newCoin = coinCount - 20
    document.getElementById('coin').innerText = newCoin

        const data = {
        name: 'Fire Service Number',
        name2: '999',
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
   
 })

    document.getElementById('call4').addEventListener('click', function(){
    const coinCount = parseInt(document.getElementById('coin').innerText)
     if(coinCount < 20){
        alert('Not Enough Coin')
        return;
     }
     alert('📞Calling: Ambulance Service - 1994-999999')
     const newCoin = coinCount - 20
    document.getElementById('coin').innerText = newCoin

         const data = {
        name: 'Ambulance Service',
        name2: '1994-999999',
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data)

 })

    document.getElementById('call5').addEventListener('click', function(){
    const coinCount = parseInt(document.getElementById('coin').innerText)
     if(coinCount < 20){
        alert('Not Enough Coin')
        return;
     }
     alert('📞Calling: Women & Child Helpline - 109')
     const newCoin = coinCount - 20
    document.getElementById('coin').innerText = newCoin

        const data = {
        name: 'Women & Child Helpline',
        name2: '109',
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data)

 })

    document.getElementById('call6').addEventListener('click', function(){
    const coinCount = parseInt(document.getElementById('coin').innerText)
     if(coinCount < 20){
        alert('Not Enough Coin')
        return;
     }
     alert('📞Calling: Anti-Corruption Helpline - 106')
     const newCoin = coinCount - 20
    document.getElementById('coin').innerText = newCoin

        const data = {
        name: 'Anti-Corruption Helpline',
        name2: '106',
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data)

 })


//  history section

const historyData = []

function getHistory (id){
     document.getElementById(id).addEventListener('click', function(){  
        const historyContainer = document.getElementById('history-container')
        historyContainer.innerText = ''
        for(const data of historyData){
        const div = document.createElement("div")
        div.innerHTML = `
                        <div class="flex justify-between items-center rounded-[10px] bg-gray-100 p-[10px] my-[20px]">
                    <div>
                        <h1 class="font-medium text-[16px]">${data.name}</h1>
                        <p class="text-gray-500">${data.name2}</p>
                    </div>
                    <div>
                        <p>${data.date}</p>
                    </div>
                </div>
         `
        historyContainer.appendChild(div)
       }
  })
 
}

getHistory('call1')
getHistory('call2')
getHistory('call3')
getHistory('call4')
getHistory('call5')
getHistory('call6')

// clear button function

document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('history-container').innerHTML = ''
    historyData.length = 0;
})

// copy btn clicking

  function addCopy (id){
    document.getElementById(id).addEventListener('click', function(){
    const copyCount = parseInt(document.getElementById('copy-count').innerText)
    const newCopyCount = copyCount + 1
    document.getElementById('copy-count').innerText = newCopyCount
    })
}

addCopy('copy1')
addCopy('copy2')
addCopy('copy3')
addCopy('copy4')
addCopy('copy5')
addCopy('copy6')

// copy the hotline number on copy click

const textCopy1 = document.getElementById('text-copy1')
 document.getElementById('copy1').addEventListener('click', function(){
      navigator.clipboard.writeText(textCopy1.textContent)
})

const textCopy2 = document.getElementById('text-copy2')
 document.getElementById('copy2').addEventListener('click', function(){
      navigator.clipboard.writeText(textCopy2.textContent)
})

const textCopy3 = document.getElementById('text-copy3')
 document.getElementById('copy3').addEventListener('click', function(){
      navigator.clipboard.writeText(textCopy3.textContent)
})

const textCopy4 = document.getElementById('text-copy4')
 document.getElementById('copy4').addEventListener('click', function(){
      navigator.clipboard.writeText(textCopy4.textContent)
})

const textCopy5 = document.getElementById('text-copy5')
 document.getElementById('copy5').addEventListener('click', function(){
      navigator.clipboard.writeText(textCopy5.textContent)
})

const textCopy6 = document.getElementById('text-copy6')
 document.getElementById('copy6').addEventListener('click', function(){
      navigator.clipboard.writeText(textCopy6.textContent)
})