fetch('../json/noticias.json')
        .then(response => response.json())
        .then(noticias => {
            const container = document.querySelector('.noticias-container');

            noticias.forEach(noticia => {
                const article = document.createElement('article');
                article.classList.add('noticia');

                article.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.descripcion}</p>
                    <img src="${noticia.imagen1}" alt="${noticia.titulo}" loading="lazy">
                `;

                noticia.contenido.forEach(texto => {
                    article.innerHTML += `<p>${texto}</p>`;
                });

                if (noticia.imagen2) {
                    article.innerHTML += `<img src="${noticia.imagen2}" alt="${noticia.titulo}" loading="lazy">`;
                }

                container.appendChild(article);
            });
        })
.catch(err => console.error('Error cargando noticias:', err));