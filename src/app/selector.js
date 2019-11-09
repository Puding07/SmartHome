//Header - Sandwich Menu

let sandwichMenu = document.querySelector('.fa-ellipsis-h'),
    rollMenu     = document.querySelector('.roll-menu'),
    sandwichBox  = document.querySelector('input[name=sandwichCheck]');

sandwichBox.addEventListener('change', function() {
    if (this.checked) {
        sandwichMenu.style.transformOrigin = "center center";
        sandwichMenu.style.transform = "rotate(90deg)";
        rollMenu.style.display = "block";
    } else {
        sandwichMenu.style.transformOrigin = "center center";
        sandwichMenu.style.transform = "rotate(360deg)";
        rollMenu.style.display = "none";
    }
});

//Header - Notes/Notifications

let notesContainer = document.querySelector('.notes-container'),
    notesBox       = document.querySelector('input[name=notesCheck]');
    notiContainer = document.querySelector('.notifications-container'),
    notiBox       = document.querySelector('input[name=notiCheck]');

notesBox.addEventListener('change', function() {
    if (this.checked) {
        notesContainer.style.display = "block";
        notiContainer.style.display = "none";
        notiBox.checked = false;
    } else {
        notesContainer.style.display = "none";
        notiContainer.style.display = "none";
        notiBox.checked = false;
    }
});

notiBox.addEventListener('change', function() {
    if (this.checked) {
        notiContainer.style.display = "block";
        notesContainer.style.display = "none";
        notesBox.checked = false;
    } else {
        notiContainer.style.display = "none";
        notesContainer.style.display = "none";
        notesBox.checked = false;
    }
});

//Main - Rooms

let roomCards = document.querySelector('#rooms'),
    roomContainer = document.querySelector('.rooms-container'),
    roomBox   = document.querySelector('input[name=roomsCheck]');

roomBox.addEventListener('change', function() {
    if (this.checked) {
        roomCards.style.display = "inline-flex";
        roomContainer.style.height = "25%";
    } else {
        roomCards.style.display = "none";
        roomContainer.style.height = "0";
    }
});

let livingRoom = document.querySelector('.living-room'),
    hall      = document.querySelector('.hall'),
    bedRoom   = document.querySelector('.bed-room'),
    kitchen   = document.querySelector('.kitchen'),
    kidsRoom   = document.querySelector('.kids-room'),
    dinningRoom = document.querySelector('.dinning-room'),
    garage      = document.querySelector('.garage');


livingRoom.addEventListener('mousedown', (e) => {
    startTime = new Date();
});

livingRoom.addEventListener('mouseup', (e) => {
    endTime = new Date() - startTime;
    timeDiff = (endTime / 1000).toFixed(3);
    console.log(timeDiff);
    if (timeDiff > 0.199) {
        document.querySelector('.living-switch').style.display = "flex";
    }
});

livingRoom.addEventListener('touchstart', (e) => {
    startTime = new Date();
});

livingRoom.addEventListener('touchend', (e) => {
    endTime = new Date() - startTime;
    timeDiff = (endTime / 1000).toFixed(3);
    console.log(timeDiff);
    if (timeDiff > 0.199) {
        document.querySelector('.living-switch').style.display = "flex";
    }
});

// Main Devices

let devices          = document.querySelector('.devices'),
    devicesContainer = document.querySelector('.devices-container'),
    devicesBox       = document.querySelector('input[name=devicesCheck]');

devicesBox.addEventListener('change', function() {
    if (this.checked) {
        devices.style.display = "inline-flex";
        devicesContainer.style.height = "30%";
    } else {
        devices.style.display = "none";
        devicesContainer.style.height = "0%";
    }
});

let exitBox = document.querySelector('input[name=livingCheck]');

exitBox.addEventListener('change', function(e) {
    if (this.checked) {
        document.querySelector('.living-switch').style.display = "none";
        exitBox.checked = false;
    }
});
