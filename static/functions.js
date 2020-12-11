
var money = document.getElementById("money")
money.addEventListener("mouseover", move);
var cookieModal = document.getElementById("cookieModal")
cookieModal.style.display = "none"
var playerCounter = 0
var ytApiReady = false


var htmlTag = document.getElementsByTagName("html")[0]
htmlTag.onclick = () => {
    var fartSound = new Audio("/fart.mp3")
    fartSound.play()
}


setInterval(() => {
    var rnd = Math.random() * 10
    if (rnd > 5) {
        var cookieClicker = document.getElementById("cookieClicker")
        var cookieModal = document.getElementById("cookieModal")
        if (cookieModal.style.display == "none") {
            cookieClicker.click()
        }
    }
}, 15000)

function openTab() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
}


function move(element) {
    var inW = window.innerWidth
    var inH = window.innerHeight
    var money = document.getElementById("money")

    money.style.top = Math.floor(Math.random() * inH) + 1
    money.style.left = Math.floor(Math.random() * inW) + 1
}

function spawnCookie(btn) {
    var cookieJar = document.getElementById("cookieJar")
    if (btn === "maybe") {
        btn = (Math.random() * 10) > 5 ? "accept" : "deny"
    }
    if (btn === "accept") {
        cookieJar.appendChild(createCookie())
    } else if (btn === "deny") {
        cookieJar.appendChild(createCookie())
        cookieJar.appendChild(createCookie())
    }

}

function createCookie() {
    var inW = window.innerWidth
    var inH = window.innerHeight
    var cookie = document.createElement("img")
    cookie.onclick = cookieTrigger
    cookie.src = "/Cookie.jpg"
    cookie.style.maxHeight = "200px"
    cookie.style.maxWidth = "200px"
    cookie.style.position = "absolute"
    cookie.style.top = Math.floor(Math.random() * inH) + 1
    cookie.style.left = Math.floor(Math.random() * inW) + 1
    return cookie
}


function onYouTubeIframeAPIReady() {
    ytApiReady = true
}

function onPlayerReady(event) {

    event.target.f.hidden = "true"
    setTimeout(() => {
        event.target.playVideo();
    }, 1000);
}


function onPlayerStateChange(event) {
    event.target.playVideo();
}

var ytPlayers = {}

function cookieTrigger() {
    var songs = ["dQw4w9WgXcQ", "LDU_Txk06tM", "ZqNpXJwgO8o"]

    playerCounter++
    var playerID = `player${playerCounter}`
    var container = document.createElement("div")
    container.id = playerID

    var playerContainer = document.getElementById("playerContainer")
    playerContainer.appendChild(container)

    var songRand = Math.round(Math.random() * (songs.length - 1))
    var chosenSong = songs[songRand]

    ytPlayers[playerID] = new YT.Player(playerID, {
        height: '390',
        width: '640',
        videoId: chosenSong,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    //ytPlayers[playerCounter].playVideo()

}
function downloadRam() {
    var progCounter = 1
    var intervalID = setInterval(() => {
        var progress = document.getElementById("progress")
        var progBar = document.getElementById("progBar")
        var googleImg = document.getElementById("googleImg")
        progress.style.backgroundColor = "blue"
        progress.style.height = "20px"
        googleImg.hidden = true
        progress.style.width = `${progCounter * 20}%`
        progBar.hidden = false
        progCounter++
        if (progCounter >= 6) {
            googleImg.src = "https://www.bing.com/images/search?q=ram"
            googleImg.hidden = false
            progBar.hidden = true
            progCounter = 1
            clearInterval(intervalID)
        }
    }, 1000);
}