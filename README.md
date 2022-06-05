# App-de-gastos 
finalidad: es una aplicación programada en lenguaje JS la cual permite dividir la totalidad de gastos, realizados por separado, de forma equitativa entre
los/las diferentes participes de una reunion, juntada o deuda comun. Su finalidad es agilizar las cuentas, todo el tiempo y tedio requerido se reducen significativamente.

funcionamiento: el proceso comienza en el ingreso de datos desde un input (nombre de la persona y gasto realizado) los cuales son levantados 
en JS y se almacenan en dos array (uno para los nombres y otro para los montos) lo cual permitirá sumar los montos en un total global y saber la cantidad especifica de 
participantes a realizar la división final. A pesar de la bifurcación de los datos existe una relación entre estos, se guardan se manera simultanea en los array, 
por lo tanto sus números de indices coinciden, es por esto que a la hora del llamado no hace falta mas de un indicador numérico.
Los elementos indicadores (p nombre: gasto realizado p) invocan los indices de igual valor de ambos array y los concatenan en una misma etiqueta HTML que es creada
de forma dinámica a través de una función específica.
Finalmente todos los modulos son invocados y ejecutados dentro de la función "enviar()", la cual es llamada desde la propiedad "onclick" en la etiqueta HTML button.
