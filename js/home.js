// USER ===================================

if ( window.location.pathname == "/integrated_project_team4_summer_2022/pages/home-client.html"){

    // document.getElementById('myProfileUserBtn').addEventListener('click', () => {

    //     window.location.href  = "../pages/profile-user.html";
    // });

    document.getElementById('exploreTatBtn').addEventListener('click', () => {

        window.location.href  = "../pages/explore-user.html";
    });

    document.getElementById('artistNearBtn').addEventListener('click', () => {

        window.location.href  = "../pages/tattoo-locator-main.html";
    });

    document.getElementById('myAppoinmentsClientBtn').addEventListener('click', () => {
        console.log("hello!");
        window.location.href  = "../pages/appointment-management-client.html";
    });

}

// ARTIST ==============================

if ( window.location.pathname == "/integrated_project_team4_summer_2022/pages/home-artist.html"){

    // document.getElementById('myProfileArtistBtn').addEventListener('click', () => {

    //     window.location.href  = "../pages/profile-artist.html";
    // });

    document.getElementById('myGalleryBtn').addEventListener('click', () => {

        window.location.href  = "../pages/gallery-artist.html";
    });

    document.getElementById('myAppoinmentsArtistBtn').addEventListener('click', () => {

        window.location.href  = "../pages/appointment-management-client.html";
    });

}
