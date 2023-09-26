/*function clickFunction() {
    console.log("button clicked")
}
*/
let myleads = []
let anyleads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("save-btn")
const ulEL = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")
const taBtn = document.getElementById("tab-btn")



taBtn.addEventListener("click", function(){
   // console.log("hello , you clicked me")
    chrome.tab.query({active: true, currentwindow: true,}, function(tabs) {
        let activeTab = tabs[0];
        var activeTabId = activeTab.id;
      //  console.log(tab[0].url)
        myleads.push(tab[0].url)
        localStorage.setItem("myleads", JSON.stringify( myleads ))
        render(myleads)

    });
    
})

deleteEl.addEventListener("dblclick", function() {
    console.log("delete")
    localStorage.clear()
    render(myleads)
    myleads = []

})
localStorage.getItem("myleads")

//console.log(leadsFromLocalStorage)

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myleads") )

if (leadsFromLocalStorage) {
    myleads = leadsFromLocalStorage
    render(myleads)
}

function render(leads) {
    let listItems = " "
   // console.log( myleads)
    for (i = 0; i < myleads.length; i++) {
       // console.log(myleads[i])
       // listItems += "<li><a target='_blank' href='" + myleads[i] + "'>" + myleads[i] + "</a></li>"
       //the symbol in the below code is a back tick `
   listItems += `
      <li>
         <a target="_blank" href="${leads[i]}">
            ${leads[i]}
         </a>
      </li> `;
    }
    //console.log(listItems)
    ulEL.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myleads.push(inputEl.value)
    inputEl.value = ""
    console.log(myleads)
 
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)

    console.log(localStorage.getItem("myleads"))
})




// falsy values
// 0
// ""
//undefined
//NaN
//null

//truthy values
//
//
//