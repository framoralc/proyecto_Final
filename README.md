# proyecto\_Final

1. Descripción
2. Instalación de servicios
3. Como configurarlo

## Descripción

Es una aplicación Web en el que se suple una necesidad del sector alimentario en la cual se facilita a los restaurantes locales la administración de pedidos a domicilio.

## Instalación de servicios

1. Instalamos de Laragon

    Enlace la web: https://laragon.org/download


2. Instalación de PostgreSQL

    - Desde Laragon le darle click derecho a la ventana ir al apartado de Herramientas a la opcion de Quick add y seleccionar PostgreSQL 18.0

3. Instalación de PHP

    - Desde Laragon le darle click derecho a la ventana ir al apartado de Herramientas a la opcion de Quick add y seleccionar PHP 8.3

4. Instalación del gestor de dependencias de PHP llamado composer.

    - Enlace a la web: https://getcomposer.org/download/

    - Entramos en la terminal que nos proporciona Laragon y copiamos los comandos de instalación de Composer

## Como configurarlo

1. Configuración de los servicios

    Para configurar los servicios hay que ir al apartado Servicios & puertos en la ventana de Preferencias que se accede dando click derecho en la ventana de Laragon y dandole al botón de preferencias

    - El servicio de apache tiene que estar en el puerto 80

    - El servicio de PostgreSQL tiene que estar en el puerto 5432

2. Configuración de la carpeta raíz

    Para que todo funcione hay que decirle a Laragon donde esta la raiz del proyecto lo cual se hace desde el apartado de preferencias en la opción Root Documentos.

3. Configuración Base de datos

    Para poder tener la base de datos operativa es necesario importar las tablas del archivo BD.sql a la base de datos de postgreSQL, debe de importarse en el esquema de public