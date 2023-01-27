Quando a gente tem elementos no mesmo pai chamamos de irmãos ou sibiling
No trecho abaixo supondo que a gente queira declarar uma constante para cada elemento de  <article>  
```html
    <article>

        <h2>Título do post </h2>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    
        <div>Escrito por Pablo Matos</div>
    </article>
```
Uma maneira de fazer isso é armazenar a referencia dele, e usar a referencia para obter uma elemento children para obter as referencias dos elementos filhos.

# Para converter um HTMLcollection em um array devemos passar o HTMLcolletion como argumento de um metodo from de uma função construtora array