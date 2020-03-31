function showPic(whichPic){
    var placeholder=document.getElementById('placeholder');
    var source =whichPic.getAttribute('href');
    placeholder.setAttribute('src',source);
    var title=whichPic.getAttribute('title');
    var description= document.getElementById('description');
    description.innerText=title;   
}



