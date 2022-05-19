/**
 * Jin Hung Chin (300338902)
 * CSIS3380 Project 2
 */
var contactListItem = document.querySelectorAll(".contact-list li")
var paginationUl = document.getElementById("paginationUl")
var contactListUl = document.querySelector(".contact-list")

var totalContact = contactListItem.length;
var countOfPage = 0;
var currentPage = 1;
const PROFILE_PER_PAGE = 10;
var contactArray = Array.from(contactListItem)

/** 
 * Page Preparation, create pagination li element and populate into ul
 */
function pagePrep(){
    countOfPage = Math.ceil(totalContact/10)
    for(let i=1; i< countOfPage+1; i++ ){
        paginationUl.innerHTML += `<li><a onclick="paginationPopulation(this)">${i}</a></li>`
    }
    defaultPage();
}

/**
 *Run default page with only 10 profile shown
 */
function defaultPage(){
    paginationPopulation(null)
}

/**
 *Population of profiles data in correspond to page numbers 
 */
function paginationPopulation(element){
    let pageNumber = 0
    let tempArray = new Array()
    let startIndex = 0
    let endIndex = 0
    //clear all current profiles
    contactListUl.innerHTML =""
    //validation for default page
    if (element == null){
        pageNumber = 1;
    }
    else{
        pageNumber = Number(element.innerText)
    }
    //define start and end index to be used for slicing array
    startIndex = (pageNumber*PROFILE_PER_PAGE)-10
    endIndex = pageNumber*PROFILE_PER_PAGE
    tempArray = contactArray.slice(startIndex,endIndex)
    tempArray.forEach(element => contactListUl.innerHTML += "<li class='contact-item cf'>"+element.innerHTML+"</li>")
}

pagePrep();
