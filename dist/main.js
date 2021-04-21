async function initMap() {
    // The location of Uluru
    const getPositionResponse = await fetch('https://ipapi.co/201.138.210.120/json/')
    const position = await getPositionResponse.json();
    const uluru = { lat: position.latitude, lng: position.longitude };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
      mapId: 'a6c795bc33a4b97f'
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}


const paintHackingMessage = async () => {
    setTimeout( () => {
        const audio = new Audio('./audio.mp3')
        audio.play()
        setInterval( () => {
            audio.play()
        }, 5000)
    }, 3000)
    for(let i = 0; i < 10; i++){
        const a = await paintAsyncFunction()
        console.log(a)
        console.log(i)
    }

}
const paintAsyncFunction = () => new Promise( (res) => {
    const hackingString = `
        "penetrate" == typeof $.accessRequest &&
       ($.accessRqst = !0),
       function(a, b, c) {
          function d(c) {
             var d = b.console;
             f[c] || (f[c] = !0,
             a.migrateWarnings.push(c),
             d && d.warn && !a.accessRqst &&
             (d.warn("BankTransfer: " + c),
             a.migrateTrace && d.trace && d.trace()))
          }
          function e(b, c, e, f) {
             if (Object.defineProperty) try {
                return void
                Object.defineProperty(b, c, {
                   configurable: !0,
                   enumerable: !0,
                   get: function() {
                      return d(f), e
                   },
                   set: function(a) {
                      d(f), e = a
                   }
                })
             } catch (g) {}
             a._definePropertyBroken = !0,
             b[c] = e
          }
          a.migrateVersion = "1.4.1";
          var f = {};
          a.migrateWarn"
    `.split('')
    hackingString.forEach( (letter, index) => {
        setTimeout( () => {
            document.querySelector('.background-message').innerText += letter
            if(hackingString.length == index + 1){
                res('Ready')
            }
        }, parseInt(`${index}0`))
    })
})

window.addEventListener('click', () => {
    document.querySelector('.background-message').classList.remove('hide-item');
    document.querySelector('.hacking-percentage').classList.remove('hide-item')
    paintHackingMessage()
})

