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

var buttonsDiv = document.createElement("div")
buttonsDiv.setAttribute("class", "buttonsDiv")

var violetBtn1 = document.createElement("button")
violetBtn1.setAttribute("class", "violetBtn1")
var btn1Text = document.createElement("a")
btn1Text.setAttribute("class", "btn1Text")
btn1Text.textContent = "SET GOALS & TIMELINES"
violetBtn1.addEventListener("mouseover", function(){
    btn1Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn1.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
})

var violetBtn2 = document.createElement("button")
violetBtn2.setAttribute("class", "violetBtn2")
var btn2Text = document.createElement("a")
btn2Text.setAttribute("class", "btn2Text")
btn2Text.textContent = "COLLABORATE ON TASKS"
violetBtn2.addEventListener("mouseover", function(){
    btn2Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn2.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
    
})

var violetBtn3 = document.createElement("button")
violetBtn3.setAttribute("class", "violetBtn3")
var btn3Text = document.createElement("a")
btn3Text.setAttribute("class", "btn3Text")
btn3Text.textContent = "ESTABLISH KNOWLEDGE HUB"
violetBtn3.addEventListener("mouseover", function(){
    btn3Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn3.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
})

var violetBtn4 = document.createElement("button")
violetBtn4.setAttribute("class", "violetBtn4")
var btn4Text = document.createElement("a")
btn4Text.setAttribute("class", "btn4Text")
btn4Text.textContent = "CREATE DOCS & NOTES"
violetBtn4.addEventListener("mouseover", function(){
    btn4Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn4.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
})

var violetBtn5 = document.createElement("button")
violetBtn5.setAttribute("class", "violetBtn5")
var btn5Text = document.createElement("a")
btn5Text.setAttribute("class", "btn5Text")
btn5Text.textContent = "BALANCE WORKLOADS"
violetBtn5.addEventListener("mouseover", function(){
    btn5Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn5.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
})

buttonsDiv.append(violetBtn1, violetBtn2, violetBtn3, violetBtn4, violetBtn5, btn1Text, btn2Text, btn3Text, btn4Text, btn5Text)
violetBtnDiv.append(violetIcon, violetHeading, violetText, buttonsDiv)


//creating page with image and text when violet buttons are clicked
//1st button

    var mainParent = document.getElementById("violetBtnItems") 

    var page1 = document.createElement("div")
    page1.setAttribute("id", "page1")

    var serialNo = document.createElement("h1")
    serialNo.setAttribute("class","serialNumber")
    serialNo.textContent = "01."

    var pageHead = document.createElement("h3")
    pageHead.setAttribute("class", "pageHeading")
    pageHead.textContent = "Set goals & timelines"

    var pagePara1 = document.createElement("p")
    pagePara1.setAttribute("class","pagePara1")
    pagePara1.textContent = "Milestones set a visual timeline for your project"

    var pagePara2 = document.createElement("p")
    pagePara2.setAttribute("class","pagePara2")
    pagePara2.textContent = "sprints and create team alignment by automating"

    var pagePara3 = document.createElement("p")
    pagePara3.setAttribute("class","pagePara3")
    pagePara3.textContent = "progress as associate tasks are completed."

    var pagePara4 = document.createElement("a")
    pagePara4.setAttribute("class", "pagePara4")
    pagePara4.textContent = "Learn more about Milestones >"

    var pageTrial = document.createElement("h5")
    pageTrial.setAttribute("class", "pageTrial")
    pageTrial.textContent = "Start Free Trial"

    var pageImg = document.createElement("img")
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp")
    pageImg.setAttribute("class", "pageImg")

    page1.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial)
    mainParent.append(page1, pageImg)


//2nd button
function createItem2(){
    var previousPage1 = document.getElementById("page1")
    previousPage1.style.display = "none"

    var mainParent = document.getElementById("violetBtnItems") 

    var page2 = document.createElement("div")
    page2.setAttribute("id", "page2")

    var serialNo = document.createElement("h1")
    serialNo.setAttribute("class","serialNumber")
    serialNo.textContent = "02."

    var pageHead = document.createElement("h3")
    pageHead.setAttribute("class", "pageHeading")
    pageHead.textContent = "Collaborate on tasks"

    var pagePara1 = document.createElement("p")
    pagePara1.setAttribute("class","pagePara1")
    pagePara1.textContent = "Tasks enable you to flexibly, organize prioritize"

    var pagePara2 = document.createElement("p")
    pagePara2.setAttribute("class","pagePara2")
    pagePara2.textContent = "and manage daily work with high level of detail"

    var pagePara3 = document.createElement("p")
    pagePara3.setAttribute("class","pagePara3")
    pagePara3.textContent = "in list, kanban and swimlane views."

    var pagePara4 = document.createElement("a")
    pagePara4.setAttribute("class", "pagePara4")
    pagePara4.textContent = "Learn more about tasks >"

    var pageTrial = document.createElement("h5")
    pageTrial.setAttribute("class", "pageTrial")
    pageTrial.textContent = "Start Free Trial"

    var pageImg = document.createElement("img")
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp")
    pageImg.setAttribute("class", "pageImg")

    page2.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial)
    mainParent.append(previousPage1, page2, pageImg)
}
violetBtn2.addEventListener("click", createItem2)

//3rd button
function createItem3(){
    var previousPage1 = document.getElementById("page1")
    var previousPage2 = document.getElementById("page2")
    previousPage1.style.display = "none"
    previousPage2.style.display = "none"

    var mainParent = document.getElementById("violetBtnItems") 

    var page3 = document.createElement("div")
    page3.setAttribute("id", "page3")

    var serialNo = document.createElement("h1")
    serialNo.setAttribute("class","serialNumber")
    serialNo.textContent = "03."

    var pageHead = document.createElement("h3")
    pageHead.setAttribute("class", "pageHeading")
    pageHead.textContent = "Establish knowledge hub"

    var pagePara1 = document.createElement("p")
    pagePara1.setAttribute("class","pagePara1")
    pagePara1.textContent = "Discussions empower all project members to"

    var pagePara2 = document.createElement("p")
    pagePara2.setAttribute("class","pagePara2")
    pagePara2.textContent = "share ideas finalize specifications and gather"

    var pagePara3 = document.createElement("p")
    pagePara3.setAttribute("class","pagePara3")
    pagePara3.textContent = "feedback in real time."

    var pagePara4 = document.createElement("a")
    pagePara4.setAttribute("class", "pagePara4")
    pagePara4.textContent = "Learn more about discussions >"

    var pageTrial = document.createElement("h5")
    pageTrial.setAttribute("class", "pageTrial")
    pageTrial.textContent = "Start Free Trial"

    var pageImg = document.createElement("img")
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp")
    pageImg.setAttribute("class", "pageImg")

    page3.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial)
    mainParent.append(previousPage1,previousPage2, page3, pageImg)
}
violetBtn3.addEventListener("click", createItem3)

//4th button
function createItem4(){
    var previousPage1 = document.getElementById("page1")
    var previousPage2 = document.getElementById("page2")
    var previousPage3 = document.getElementById("page3")
    previousPage1.style.display = "none"
    previousPage2.style.display = "none"
    previousPage3.style.display = "none"

    var mainParent = document.getElementById("violetBtnItems") 

    var page4 = document.createElement("div")
    page4.setAttribute("id", "page4")

    var serialNo = document.createElement("h1")
    serialNo.setAttribute("class","serialNumber")
    serialNo.textContent = "04."

    var pageHead = document.createElement("h3")
    pageHead.setAttribute("class", "pageHeading")
    pageHead.textContent = "Create docs & notes"

    var pagePara1 = document.createElement("p")
    pagePara1.setAttribute("class","pagePara1")
    pagePara1.textContent = "Create beautiful docs, notes & wikis for your"

    var pagePara2 = document.createElement("p")
    pagePara2.setAttribute("class","pagePara2")
    pagePara2.textContent = "project and share with anyone. Nifty even"

    var pagePara3 = document.createElement("p")
    pagePara3.setAttribute("class","pagePara3")
    pagePara3.textContent = "integrated natively with Google Docs."

    var pagePara4 = document.createElement("a")
    pagePara4.setAttribute("class", "pagePara4")
    pagePara4.textContent = "Learn more about Docs >"

    var pageTrial = document.createElement("h5")
    pageTrial.setAttribute("class", "pageTrial")
    pageTrial.textContent = "Start Free Trial"

    var pageImg = document.createElement("img")
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp")
    pageImg.setAttribute("class", "pageImg")

    page4.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial)
    mainParent.append(previousPage1,previousPage2,previousPage3, page4, pageImg)
}
violetBtn4.addEventListener("click", createItem4)


