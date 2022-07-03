Proyecto TECHWEARCLUBAR realizado para CoderHouse

Creado con : 
# React.js [https://create-react-app.dev]

## Como primera medida, debera tener instalado Node.js y git en su pc : 

[https://nodejs.org/en/]
[https://git-scm.com/downloads]


Para poder ejecutar el proyecto debera en primera instancia clonar el repositorio e instalar las dependencias de Node en el proyecto.
Ejecuta los siguientes comandos : 

- $ git clone https://github.com/pagatelabirra/techwearclub-ar
- $ cd techwearclub-ar
- $ npm install
- $ npm start

----------------------------------------------------------------------------------------------

# Librerias Utilizadas para este proyecto

## React Toastify

### `Documentacion de React Toastify`

[https://www.npmjs.com/package/react-toastify]

Para poder visualizar las alertas del proyecto debera ejecutar el siguiente comando :
 - $ npm install --save react-toastify

 ## React Router

### `Documentacion de React Router`

[https://reactrouter.com/docs/en/v6]

Para poder navegar sobre las paginas del proyecto debera ejecutar el siguiente comando :
 - $ npm install react-router-dom@6

 ## Formik

 ### `Documentacion Formik`

 [https://formik.org/docs/overview]

 Para poder hacer funcionar el formulario en el carrito debera ejecutar el siguiente comando : 
  - $ npm install formik --save

## React-Bootstrap

### `Documentacion de React Bootstrap`

[https://react-bootstrap.github.io/getting-started/introduction]

Para poder visualizar el proyecto de forma correcta debera ejecutar el siguiente comando : 
- $ npm install react-bootstrap bootstrap

## SweetAlert2

### `Documentacion de SweetAlert2`

[https://sweetalert2.github.io/#download]

Para poder visualizar las alertas del carrito de forma correcta debera ejecutar el siguiente comando : 
- $ npm install sweetalert2

## Google Firebase

### `Documentacion de Google Firebase`

[https://firebase.google.com]

Para poder obtener los productos a visualizar y enviar las ordenes de compra debera ejecutar el siguiente comando : 
- $ npm install --save firebase

----------------------------------------------------------------------------------------------

# Resumen de la Aplicacion

La aplicacion siempre va a mantener renderizado el componente NavBar (El cual posee toda la navegacion y CartLogo)

## Rutas : 

### '/'  : 
 Ruta de Home : Muestra todos los productos. <ProductListContainer/> sin ningun tipo de filtado

### /category/'categoria' : 
 Ruta para mostrar todos los productos pertenecientes a una 'categoria' dada. <ProductListContainer/>

### /product/'productId' : 
 Ruta que renderiza <ProductDetail/> al hacer click al boton [Ver Producto] de una <ProductCard/> dentro de <ProductListContainer/>. 
 Esta ruta muestra en detalle todas las caracteristicas del producto, metodos de pago y un catalogo de fotos.

### /cart : 
 Ruta para ver el carrito <Cart/> el cual muestra todos los productos agregados al carrito y permite iniciar el proceso de compra 
 (Incluido un formulario que se debe llenar para poder mantenerse en contacto con el cliente).

### * : 
 Cualquier otra ruta que se quiera acceder que no sean ninguna de las anteriores, mostrara el componente <ErrorRender/>
 alertando que dicha ruta no existe.

----------------------------------------------------------------------------------------------

# Variables de entorno : 


La conexion a firebase para poder mostrar los productos y enviar las ordenes de compra, esta manejado mediante variables de entorno que 
ocultan la conexion a la base de datos hecha por el creador de este proyecto. Estas mismas pueden ser reemplazadas por una base de datos
propia que a continuacion sera explicada. 

El archivo .env.example, es donde se guardan las variables de entorno para conectar a una base de datos de firestore.
este mismo debera ser renombrado a .env una vez asignado un valor a cada uno de las variables declaradas. Si usted desea obtener el archivo .env
original del creador por favor enviar un mail a raulmatiascabral@gmail.com y el mismo se le sera enviado para su prueba.

Si desea utilizar su propia base de datos, una vez asignado los valores de las variables de entorno debera chequear que su base de datos cumpla 
con las siguientes condiciones : 

- Debera poseer 2 colecciones : 
  - orders : la cual estara vacia, alli seran cargadas todas las ordenes de compra creadas por los usuarios de la aplicacion.
    El formato del objeto orders sera creado por la misma aplicacion de forma automatica, siempre y cuando sea respetado el formato de los productos.
  - products : la cual tendra un objeto por cada producto, dichos objetos     
    necesitaran los siguientes campos : 
      - id (string): generado automaticamente por Firestore.
      - cant (number): Inicializado en 0. El cual contendra la cantidad de productos del mismo a comprar.
      - category (string) : Categoria a la cual pertenece el producto.
      - description (array de string) : Contiene en cada campo una breve descripcion del producto. Ej : [0]Slim fit, [1]Tactica, [2]Algodon, [3]All Season
      - discount (number entre 0 y 99) : Descuento del producto el cual sera aplicado y reemplazado en el campo price al agregar al carrito.
      - price (number) : Precio del producto.
      - src1, src2, src3, src4 (string): Rutas absolutas a una imagen que deberian estar dentro de "resources/img/" . El mismo cuenta con imagenes ya cargadas.
      - stock (number) : Cantidad de stock del mismo. Si esta en 0, el mismo tendra el boton agregar al carrito deshabilitado.




