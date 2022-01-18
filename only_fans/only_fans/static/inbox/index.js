var header = document.getElementById("main-header");
var searchBar = document.getElementById("search-bar");
var searchIcon = document.getElementById("search-icon");
var input = document.getElementById("search-bar-input");
var nav = document.getElementById("hamburger-nav");
var backArrow = document.getElementById("back-arrow");
var backLabel = document.getElementById("header-text-back");
var searchResults = document.getElementById("search-results");
var toggle = document.getElementById("toggle-container");
var inboxMessages = document.getElementById("message-body");
var inboxIconContainer = document.getElementById("message-icon-container");
var inboxIcons = document.getElementById("inbox-icons");
var iconWrapper = document.getElementById("icon-wrapper");
var toggleLimit = window.matchMedia("(max-width: 550px)");

searchBar.addEventListener("click", function(e) {
  header.classList.add("search-activated");
  searchIcon.classList.add("clicked-search-icon");
  nav.classList.add("hide");
  input.classList.add("search-clicked");
  backArrow.classList.add("show-flex");
  backArrow.classList.remove("hide");
  searchResults.classList.toggle("show");
  toggle.classList.add("hide");
  inboxMessages.classList.add("hide");
  iconWrapper.classList.add("hide");
});

backArrow.addEventListener("click", function(e) {
  header.classList.remove("search-activated");
  searchIcon.classList.remove("clicked-search-icon");
  input.classList.remove("search-clicked");
  backArrow.classList.remove("show-flex");
  backArrow.classList.add("hide");
  searchResults.classList.remove("show");
  nav.classList.add("show-flex");
  nav.classList.remove("hide");
  iconWrapper.classList.remove("hide");
  if (toggleLimit.matches) {
    toggle.classList.remove("show-flex");
    toggle.classList.add("hide");
  } else {
    toggle.classList.remove("hide");
  }
  inboxMessages.classList.remove("hide");
  iconWrapper.classList.remove("margin-left");
});

var msgContainer1 = document.getElementById("msg-container1");
var msg1 = document.getElementById("message1");
var expMessage = document.getElementById("expanded-msg");
var prvAvatar = document.getElementById("preview-avatar");
var prvMsgTxt = document.getElementById("preview-message-text");

var msgContainer2 = document.getElementById("msg-container2");
var msg2 = document.getElementById("message2");
var expMessage2 = document.getElementById("expanded-msg2");
var prvAvatar2 = document.getElementById("preview-avatar2");
var prvMsgTxt2 = document.getElementById("preview-message-text2");

var msgContainer3 = document.getElementById("msg-container3");
var msg3 = document.getElementById("message3");
var expMessage3 = document.getElementById("expanded-msg3");
var prvAvatar3 = document.getElementById("preview-avatar3");
var prvMsgTxt3 = document.getElementById("preview-message-text3");

var msgContainer4 = document.getElementById("msg-container4");
var msg4 = document.getElementById("message4");
var expMessage4 = document.getElementById("expanded-msg4");
var prvAvatar4 = document.getElementById("preview-avatar4");
var prvMsgTxt4 = document.getElementById("preview-message-text4");

msg1.addEventListener("click", function(e) {
  expMessage.classList.toggle("hide");
  prvAvatar.classList.toggle("hide");
  prvMsgTxt.classList.toggle("hide");
  msgContainer1.classList.toggle("margin-bottom");
});

msg2.addEventListener("click", function(e) {
  expMessage2.classList.toggle("hide");
  prvAvatar2.classList.toggle("hide");
  prvMsgTxt2.classList.toggle("hide");
  msgContainer2.classList.toggle("margin-top");
  msgContainer2.classList.toggle("margin-bottom");
});

msg3.addEventListener("click", function(e) {
  expMessage3.classList.toggle("hide");
  prvAvatar3.classList.toggle("hide");
  prvMsgTxt3.classList.toggle("hide");
  msgContainer3.classList.toggle("margin-top");
});

msg4.addEventListener("click", function(e) {
  expMessage4.classList.toggle("hide");
  prvAvatar4.classList.toggle("hide");
  prvMsgTxt4.classList.toggle("hide");
  msgContainer4.classList.toggle("margin-bottom");
});

var toggleIcon = document.getElementById("inner-toggle");
var toggleTack = document.getElementById("thumbtack");
var toggleSlider = document.getElementById("slider");
var inboxText = document.getElementById("header-text-inbox");

toggleIcon.addEventListener("click", function(e) {
  if (e.target.classList.contains("inner-toggle")) {
    toggleIcon.classList.toggle("right");
    toggleTack.classList.toggle("rotate");
    toggleSlider.classList.toggle("white");
    inboxText.classList.toggle("activated");
    if (inboxText.classList.contains("activated")) {
      inboxText.innerHTML = "Pinned";
    } else {
      inboxText.innerHTML = "Inbox";
    }
  }
});

toggleTack.addEventListener("click", function(e) {
  if (e.target.classList.contains("fa-thumbtack")) {
    toggleTack.classList.toggle("rotate");
    toggleIcon.classList.toggle("right");
    toggleSlider.classList.toggle("white");
    inboxText.classList.toggle("activated");
    if (inboxText.classList.contains("activated")) {
      inboxText.innerHTML = "Pinned";
    } else {
      inboxText.innerHTML = "Inbox";
    }
  }
});

var profileAvatar = document.getElementById("profile-container");
var overlayWrapper = document.getElementById("expanded-menu-overlay");

profileAvatar.addEventListener("click", function(e) {
  overlayWrapper.classList.toggle("hide");
});

var mainWidget = document.getElementById("main-widget-plus");
var icon = document.getElementById("main-icon");
var device = window.matchMedia("(max-width:615px)");
var nDevice = window.matchMedia("(min-width:615px)");
var newMsgAshleigh = document.getElementById("ashleigh-newmsg");
var newMsgQueenie = document.getElementById("queenie-newmsg");
var newMsgJason = document.getElementById("jason-newmsg");

icon.classList.add("fa-plus");

var widgets = document.getElementsByClassName("widget");
for (var i = 0; i < widgets.length; i++) {
  widgets[i].addEventListener("click", function(e) {
    if (e.target.classList.contains("green")) {
      newMsgAshleigh.classList.add("show");
    }
    if (e.target.classList.contains("teal")) {
      newMsgQueenie.classList.add("show");
    }

    if (e.target.classList.contains("purple")) {
      newMsgJason.classList.add("show");
    }
  });
}

var closeIcons = document.getElementsByClassName("fa-times");
for (var i = 0; i < closeIcons.length; i++) {
  closeIcons[i].addEventListener("click", function(e) {
    e.target.parentNode.parentNode.parentNode.classList.remove("show");
  });
}

var minimizeIcons = document.getElementsByClassName("fa-minus");

for (var i = 0; i < minimizeIcons.length; i++) {
  minimizeIcons[i].addEventListener("click", function(e) {
    var clickedMinimize = e.target;
    e.target.parentNode.parentNode.nextElementSibling.classList.toggle("hide");
    clickedMinimize.classList.toggle("fa-arrows-alt-h");
    clickedMinimize.classList.toggle("fa-minus");
  });
}

mainWidget.addEventListener("click", function(e) {
  if (device.matches) {
    if ((e.target.id = "main-widget")) {
      widgets[0].classList.toggle("opacity-1");
      widgets[1].classList.toggle("opacity-1");
      widgets[2].classList.toggle("opacity-1");
      widgets[3].classList.toggle("opacity-1");
      widgets[4].classList.toggle("opacity-1");
      icon.classList.toggle("rotate-back");
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-pencil-alt");
      if (icon.classList.contains("fa-plus")) {
        icon.classList.remove("fa-pencil-alt");
      }
      if (icon.classList.contains("rotate-back")) {
        icon.classList.add("rotate-120");
      }
    }
  }
});

var settings = document.getElementById("settings-container");
var settingsArrow = document.getElementById("settings-down");
var hiddenMenu = document.getElementById("hidden-menu-items");

settings.addEventListener("click", function(e) {
  settingsArrow.classList.toggle("fa-sort-up");
  hiddenMenu.classList.toggle("show");
});

var hamburgerNav = document.getElementById("hamburger-nav-full");
var hamIcon = document.getElementById("ham-nav-icon");

nav.addEventListener("click", function(e) {
  hamburgerNav.classList.toggle("hamburger-nav-right");
  hamIcon.classList.toggle("fa-times");
  inboxText.classList.toggle("ham-activated");
  if (inboxText.classList.contains("ham-activated")) {
    inboxText.innerHTML = "Menu";
  } else {
    inboxText.innerHTML = "Inbox";
  }
});