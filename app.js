function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    const h1=document.querySelector('.NosProduits')
    if(sidebar.style.display=='block'){
      sidebar.style.display='none'
    }else{
      sidebar.style.display='block'
    }

  }
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
  }


