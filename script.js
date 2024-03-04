var settingsMenu = document.querySelector(".settings-menu")
var Hide = document.querySelector(".advertisement")
var SeeAll = document.querySelector(".event-all")
var SeeAllInactive = document.querySelector(".sidebar-title-SeeAll")
var CloseActive = document.querySelector(".sidebar-title-Close")
var CloseAd = document.querySelector(".sidebar-title-closeAd")
var ShowAd = document.querySelector(".sidebar-title-showAd")
var EditProfile = document.querySelector(".edit-profile")
var RegisterModal = document.querySelector(".modal-register")
var AdvancedSearch = document.querySelector(".Advanced-search")

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

function AdvertisementHide(){
    Hide.classList.toggle("advertisement-height");
    CloseAd.classList.toggle("sidebar-title-closeAd-Inactive");
    ShowAd.classList.toggle("sidebar-title-showAd-Active");
}

function EventAll(){
    SeeAll.classList.toggle("event-all-height"); /*Esconde los demás eventos*/ 
    SeeAllInactive.classList.toggle("sidebar-title-SeeAll-Active"); /*Esconde el See All*/
    CloseActive.classList.toggle("sidebar-title-Close-Inactive"); /* Muestra el Close */
}

function settingsEditProfile(){
    EditProfile.classList.toggle("edit-profile-height");
}

function ShowModalRegister(){
    RegisterModal.classList.toggle("modal-register-height");
}

function ShowAdvancedSearch(){
    AdvancedSearch.classList.toggle("Advanced-search-height");
}