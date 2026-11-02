fetch('../json/vitrinaProductos.json')
        // Manejar la respuesta de la solicitud
        .then(response => response.json())
        // Procesar los datos de los productos
        .then(productosDiagons => {
            const container = document.querySelector('.ventasDiagons-container-info');

            productosDiagons.forEach(producto => {
                // Crear un artículo para cada producto
                const article = document.createElement('article');
                // Agregar la clase 'producto' al artículo
                article.classList.add('producto');
                
                // Agregar el contenido del producto al artículo
                article.innerHTML = `
                    <img src="${producto.imagen1}" alt="${producto.titulo}" loading="lazy">
                    <h3>${producto.titulo}</h3>
                    <p>${producto.descripcion}</p>
                `;
                // Agregar el contenido adicional del producto
                producto.contenido.forEach(texto => {
                    article.innerHTML += `<p>${texto}</p>`;
                });
                // Agregar la segunda imagen si existe
                if (producto.imagen2) {
                    article.innerHTML += `<img src="${producto.imagen2}" alt="${producto.titulo}" loading="lazy">`;
                }
                // Agregar el artículo al contenedor
                container.appendChild(article);
            });
        })
// Manejar errores en la solicitud
.catch(err => console.error('Error cargando productos:', err));