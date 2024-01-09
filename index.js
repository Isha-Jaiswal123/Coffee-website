function run(){
    let menu=document.getElementById("menu");
    let bars=document.getElementById("bar");

    if(menu.style.display !='none'){
        menu.style.display='none' ;
    }else{
        menu.style.display='block';
    }
}

function run2(){
    let searchbar=document.getElementById("searchbar");
    let search=document.getElementById("search");

    if(searchbar.style.display !='none'){
        searchbar.style.display='none' ;
    }else{
       searchbar.style.display='block';
    }
}

function run3(){
    let shopping_cart=document.getElementById("shopping_cart");
    let shopping=document.getElementById("shopping");

    if(shopping_cart.style.display !='none'){
        shopping_cart.style.display='none' ;
    }else{
        shopping_cart.style.display='block';
    }
}