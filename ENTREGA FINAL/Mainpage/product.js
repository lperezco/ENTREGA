class Product  {
    constructor(name, price, description, imgTazaUrl, altText)  {
        
        this.name = name
        this.price = price
        this.description = description
        this.imgTazaUrl = imgTazaUrl
        this.altText = altText
    }


createHtml ()  {
    let formattedPrice = this.price.toLocaleString();

    return  `
              <article class="product" tabindex="0">
                <img src="${this.imgTazaUrl}" alt="${this.altText}">
                <h2>${this.name}</h2>
                <p>${formattedPrice}</p>
                <h3>${this.description}</h3>
                <i class="fa-solid fa-shopping-cart"></i> <!-- Ícono de carrito -->
            </article>
    
    `;
}

}

