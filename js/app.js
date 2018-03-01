const galleryContainer = document.getElementById("gallery");

const imgContainer =gallery => {
  const images = gallery.getElementsByTagName("img"); //para llamar a las imagenes
  const imagesArray= Array.prototype.slice.call(images); //conviertiendo en array el contenedor

  imagesArray.forEach(function(img){ //itera el array
    let imgAlt = img.getAttribute("alt"); //es para acceder a los atributos
    let imgSrc = img.getAttribute("src"); //es para acceder a los atributos

 //template para la estructuta de figure
    let template = `<figure><img src=${imgSrc}></img><figcaption>${imgAlt}</figcaption></figure>`;        img.outerHTML = template; //con esto se hace el remplazo al template
  });
};

imgContainer(galleryContainer);// esto es lo que hace que se ejecute la funcion.
