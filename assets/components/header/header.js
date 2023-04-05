var header = document.getElementsByTagName('header')[0]

header.innerHTML=`
    <div class="logo"> 
        <img src="/assets/img/logo.png">
    </div>

    <div style="display: flex;    justify-content: space-between;    width: 13%;">
        <div id="menu" class="menu"> </div>  

        <div class="btn-c xs-hidden sm-hidden">
            <a class="btn" href="#">Contato</a>
        </div>
    </div>
    
    
    

`;


console.log(header)
