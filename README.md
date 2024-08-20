# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# <center>Tp final de front-end<center>

Este proyecto consiste en una pagina como whatsap que usa localstorage para almacenar contactos y mensajes, ademas de usar fecth para recibir reviews y podes setearlas para poder manipularlas.


</br>

---

## Dificultades

Hubo bastantes dificultades que me hicieron tener que volver a consultar las clases grabadas y buscar informacion.

* <p color='gold'>Crear mensajes</p>. Se pudo resolver consultando las clases
* <p color='gold'>Interactuar con contactos creados</p>Cuando se creaban contactos tuve un problema a la hora de mostrarlos en la lista y de mandar mensajes
* <p color='gold'>Crear reviews</p>Al usar get hizo que cuando se crear una review no apareciera en la lista asi que tuve usar una funcion para guardarlos en un set al obtenerlos
* <p color='gold'>Editar Contactos</p>Cuando editaba un contacto me guardaba 10 contactos iguales mas en el local storagge ademas de que no se me editaba el contacto, y era por un problema en la funcion handleEditContact que hacia que el renderizado se haga muchas veces
* <p color='gold'>Realizar diseño de la pagina</p>No soy bueno como diseñador ,me quede bastante corto de ideas y aunque me voy contento con mi desempeño con la funcionalidad de la pagina ,no me voy conforme con los estetico


</br>
---

## Pages

<p align="center"><img src="images/Captura de pantalla 2024-08-19 235602.png"/></br>Home(pagina de contactos)</p>

Esta pagina cuenta con responsive para varias medidas,cosa que me genero bastante dolor de cabeza.

El buscador realizado con useEffect fue una de las cosas que mas me gusto. La pagina tiene la opcion para ber las reviews y crear contactos nuevo.
Cada contacto muestra la imagen , su ultimo mensaje, y la fecha de su ultimo mensaje

</br>

<p align="center"><img src="images/Captura de pantalla 2024-08-19 235657.png"/></br>Reviews</p>

Esta pagina ha no fue tan dificil, vi la clase grabada de nuevo para hacer el fecth y use la clase 29 para poder ver como implementarlo en la pagina.

</br>

<p align="center"><img src="images/Captura de pantalla 2024-08-19 235712.png"/></br>Crear Review</p>

Pagina sencilla y rapida,fue la ultima que hice y me genero problemas para incorporar la review creada con las otras review obtenidas con el get.

</br>

<p align="center"><img src="images/Captura de pantalla 2024-08-19 235724.png"/></br>Crear Contacto</p>

Lo unico que no me gusta de esta pagina es como se obtiene la url de la imgen,sineto que es muy impractico y me gustaria encontrar otra forma.

</br>

<p align="center"><img src="images/Captura de pantalla 2024-08-19 235741.png"/></br>CHAT</p>

Me encanto esta pagina,me voy conforma y a gusto con las funcionalidades que logre.

</br>

<p align="center"><img src="images/Captura de pantalla 2024-08-19 235756.png"/></br>Info de contacto</p>

No me gusta lo estetico de esta pagina,siento que se pueden agregar muchas mas cosas.

</br>

<p align="center"><img src="images/Captura de pantalla 2024-08-19 235805.png"/></br>Editar Contacto</p>

</br>


## Conclusion

Subio mucha mi confianza haciendo este trabajo, crei que iba lento y de mala forma a la mitad del curso porque siempre iba atrasado, pero logre ponerme al dia y comprometerme con el trabajo ,algo que me gusto hacer y que cuando agarraba no lo podia soltar, se me pasaban las horas haciendolo. Si no tuviera otras responsabilidades seria una adiccion.



