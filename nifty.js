//getting the div which is declared in html
var div = document.getElementById("firstContainer")
    

//creating elements, setting attributes and textcontent
var firstParent = document.createElement("div")
firstParent.setAttribute("id", "firstParent")

var awarded = document.createElement("h4")
awarded.setAttribute("class", "awardedText")
awarded.textContent = "AWARDED  #1 Project Management App by G2"

var heading = document.createElement("h2")
heading.setAttribute("class", "headingText")
heading.textContent = "Manage projects, not tools."

var text1 = document.createElement("p")
text1.setAttribute("class", "text1Text")
text1.textContent = "Stop switching between Chats, Tasks, Docd, Calendar, &"

var text2 = document.createElement("p")
text2.setAttribute("class", "text2Text")
text2.textContent = "Meeting tools -- automate your team & client work in one"

var text3 = document.createElement("p")
text3.setAttribute("class", "text3Text")
text3.textContent = "simple, yet powerful app."


//appending 
firstParent.append(awarded, heading, text1, text2, text3)
div.append(firstParent)


//company logos
var logosDiv = document.getElementById("logosDiv")

var logoParent = document.createElement("div")
logoParent.setAttribute("class", "logoParentDiv")

var logoHeading = document.createElement("h3")
logoHeading.setAttribute("class", "logoHead")
logoHeading.textContent = "TRUSTED BY THOUSANDS OF REMOTE TEAMS"

var apple = document.createElement("img")
apple.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-apple.90494dc.svg")
apple.setAttribute("id", "appleLogo")

var verizon = document.createElement("img")
verizon.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-verizon.9e31975.svg")
verizon.setAttribute("class", "verizonLogo")

var periData = document.createElement("img")
periData.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-pd.2e75b01.svg")
periData.setAttribute("class", "periDatalogo")

var emovis = document.createElement("img")
emovis.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-emovis.1bc45e8.svg")
emovis.setAttribute("class", "emovisLogo")

var vmware = document.createElement("img")
vmware.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-vmware.61e07e9.svg")
vmware.setAttribute("class", "vmwareLogo")

var ibm = document.createElement("img")
ibm.setAttribute("src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPgogIDxjbGlwUGF0aCBpZD0iYiI+CiAgICA8cGF0aCBkPSJNMC0xdjgzaDU1LjkzN3YyMzZIMS41MjN2ODJoMTk0LjY1di04MmgtNTUuOTM4VjgyaDU0LjQxNFYtMXptNTU0LjAyIDF2ODJoNTUuOTM4djIzNmgtNTQuNDE0djgyaDEzOC43MVYxNzEuODRsODIuNjU2IDIyOC4wOCAxLjY4LjA0IDgxLjE3Mi0yMjguMTJWNDAwaDE0MC4yM3YtODJoLTU1LjkzOFY4Mmg1NC40MTVWMGgtMTU2LjMzbC02NC43MjYgMTgyLjg5TDcxMS44NjYgMHoiLz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMjIyLjIzIDB2ODJoNTUuOTM3djEzMGgyMTUuMzF2LTI0LjkyOHMxOC4wMTEtMTQuMDQyIDIzLjc1LTI3LjM2N2wxMS41MjMtMjUuODU1czUuMzUyLTE0LjQ3MiA1LjM1Mi0yNy40MDVsLTIuMzA1LTI1Ljg1NXMtMy42MTYtMjEuMDYzLTkuOTIyLTI3LjMyOGwtMjIuMjY2LTI1Ljg5NVM0NzEuMjc2IDAgNDMzLjc1IDB6bTE0MC4yMyA4Mmg4MS45OTJ2NzZIMzYyLjQ2eiIvPgogICAgPHVzZSB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQwMCkiIHhsaW5rOmhyZWY9IiNhIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzYTNhM2EiIHN0cm9rZS13aWR0aD0iMjcuMzciIGQ9Ik0wIDEzLjY4M2gxMDMwdjUzLjIzMkgwbTAgNTMuMjMyaDk3NXY1My4yNDJIMHY1My4yMjJoOTc1djUzLjIyMkgwbTAgNTMuMjQyaDEwMzB2NTMuMjQySDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPgo8L3N2Zz4K")
ibm.setAttribute("class", "ibmLogo")

var loreal = document.createElement("img")
loreal.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-loreal.f0acb48.svg")
loreal.setAttribute("class", "lorealLogo")

var nyu = document.createElement("img")
nyu.setAttribute("src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yIDMwLjEiPgogIDxwYXRoIGZpbGw9IiMzYTNhM2EiIGQ9Ik0zNy45IDYuN2gzLjVsOCAxMC41VjYuN2gzLjd2MTdoLTMuMmwtOC4zLTEwLjh2MTAuOGgtMy43di0xN3pNNjEuNSAxN0w1NC45IDYuN2g0LjRsNC4xIDYuOCA0LjEtNi44aDQuM2wtNi41IDEwLjJ2Ni44aC0zLjdWMTd6bTExLjktLjZWNi43aDMuN3Y5LjZjMCAyLjggMS40IDQuMiAzLjcgNC4yIDIuMyAwIDMuNy0xLjQgMy43LTQuMVY2LjdoMy43djkuNmMwIDUuMi0yLjkgNy43LTcuNSA3LjdzLTcuMy0yLjYtNy4zLTcuNm0tNjAtLjdjLTMuMS0xLjgtMi44LTQuNS0xLjUtNi40di0uMmMtLjEtLjUtLjYtMS42LS44LTEuOS0uMS0uMS0uMS0uMS0uMSAwIDAgLjUtLjYgMS44LTEuNSAzLjMtMSAxLjctMSA1LjIgMy45IDUuMiAwIC4xIDAgMCAwIDBtLjgtLjFjLTEuOC0zLjkgMS44LTYuNSAyLjQtNyAuMS0uMS4xLS4xLjEtLjIgMC0xLjItLjctMy4yLS45LTMuNWgtLjFjLS4zIDEuMi0yIDMtMi4zIDMuNC0yLjkgMy4zLTIuMiA1LjQuOCA3LjMgMCAuMSAwIDAgMCAwbS42LS4yYy45LTQuMiA0LjMtNC4zIDQuNi01LjEuNS0xLjItLjQtMy40LS42LTMuN2gtLjFjLS41IDEtMS4yIDItMS44IDIuNC0uNy43LTMuNyAyLjktMi4xIDYuNC0uMS4xIDAgLjEgMCAwbS42LjRjNS41LjIgNS45LTQuOCA1LjktNi43IDAtLjEtLjEtLjEtLjEgMC0uMi40LS45IDEuOC0yLjkgMi42LTEuNy44LTIuOCAyLjUtMi45IDQuMS0uMSAwIDAgMCAwIDBtMS4yLjZoLTQuM3YxLjNoNC4zdi0xLjN6bS0yLjUgMTAuMmMwIC4yLjUuMy42IDBsMS04LjNoLTIuNWwuOSA4LjN6bTE2IDMuNUguMVYuMWgzMHYzMHoiLz4KPC9zdmc+Cg==")
nyu.setAttribute("class", "nyuLogo")

//appending logos to its parent
logoParent.append(logoHeading, apple, verizon, periData, emovis, vmware, ibm, loreal, nyu)
logosDiv.append(logoParent)

//violet buttons and "say good bye to meetings" part creating and appending elements
var violetBtnDiv = document.getElementById("violetBtnsHolder")

var violetIcon = document.createElement("p")
violetIcon.setAttribute("class", "violetIconStyle")

var violetHeading = document.createElement("h3")
violetHeading.setAttribute("class", "violetHeading")
violetHeading.textContent = "Say good bye to status meetings!"

var violetText = document.createElement("a")
violetText.setAttribute("class", "violetText")
violetText.textContent = "Create a clear plan of action for your projects and automat your progress tracking"

// var violetBtn1 = document.createElement("button")
violetBtnDiv.append(violetIcon, violetHeading, violetText)