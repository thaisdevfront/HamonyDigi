var header = document.getElementsByTagName('header')[0]

header.innerHTML=`
    <div class="logo"> 
        <img src="/assets/img/logo.png">
    </div>
    <div class="menu"> 
        <img src="/assets/img/menu-icon.png">
        <div class="nav"hidden>
        <a class="nav-link" href="#">Pagina Inicial</a>
        <a class="nav-link" href="#">Web Design</a>
        <a class="nav-link" href="#">Design Social Midia</a>
    </div>
    </div>

    <div class="btn-c xs-hidden">
        <a class="btn" href="#">Contato</a>
    </div>
    
    

`;


console.log(header)
