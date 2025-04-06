# TrelloWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Ejecutar 
Indicaciones para ejecutar la aplicativo 
1.	Se requiere los siguientes productos
FRONTEND
Node 12
Angular 8
Boostrap 4 > ngx-bootstrap

BACKEND
.Net core 3.1
Libreriar MongoDB
2.	El producto está compuesto por dos aplicativos 
TrelloApi: Encargado de la comucion entre la base de datos y el portal web. Fue desarrollado en Visual studio 2019, .Net Core 3.1. se utilizó inyección de dependencia como patrón.
TrelloWeb: Portal donde el cliente puede realizar las tareas solicitadas, en el documento de requerimiento
Para su funcionamiento basta con instalar los paquetes necesarios, antes mencionados.
Realice instalaciones ejecutando el archivo package.json
Deberá ejecutar la aplicación que hace relación a la API(TrelloApi)
Después ejecute el proyecto Web (TrelloWeb)

## API
Get
https://localhost:5001/api/task/
https://localhost:5001/api/task/5f058571bf9c13aaa4c50aa0
https://localhost:5001/api/statu
https://localhost:5001/api/tasktokuser
Delete
https://localhost:5001/api/tasktokuser/5f07ddc0eb84570f6472fe56
Put
https://localhost:5001/api/taskuser/5f05945f05359ba4f47085ff

## Base de datos
Base de Datos : TrelloDB

Status: Almacena los estados de la tarea.
Task: Almacen las tareas
User: Almacena los usuarios
TaskToUser: Almacena las tareas asignadas al usuario.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Pantallazo
<p align="left">
<img src="https://github.com/ymercadov/TrelloWeb/blob/master/Captura%20de%20pantalla%202025-04-04%20140622.png"/> 
</p>