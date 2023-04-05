var fullbanner = document.getElementById("full-banner");

fullbanner.innerHTML = `
<div class="title">
    <h1>DIGITAL HARMONY</h1>
    <p>Experiência, Design, integração e Social Midia Digital.</p>
</div>
<div class="Donw">
    <a hrf="#">
        <i class="fa-solid fa-chevron-down"></i>
    </a>
</div>


`;
 

if (window.matchMedia("(max-width: 768px)").matches) {
    /* a viewport tem pelo menos 400 pixels de largura */
    console.log('mobil')
    fullbanner.style.cssText='background-image: url(assets/img/designer.png);'

  } else {
    /* a viewport menos que 400 pixels de largura */
    console.log('Dktp')
    fullbanner.style.cssText='background-image: url(assets/img/ecommerce.png);'



  }
 
  