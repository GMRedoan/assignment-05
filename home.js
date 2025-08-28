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
 })
