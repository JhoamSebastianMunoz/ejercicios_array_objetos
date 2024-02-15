/* Ejercicio 1:
El software que se desarrollará controlará un cajero automático (ATM) a través de una simulación usando el 
lenguaje de programación JavaScript.
El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente que inserte su documento de 
identidad y su pin de 4 dígitos, los cuales se enviarán al banco para su validación como parte de cada 
transacción. El cliente podrá entonces realizar una o más transacciones. El menú se mostrará en la consola 
hasta que el cliente indique que no desea realizar más transacciones.
El cajero automático debe ser capaz de proporcionar los siguientes servicios al cliente:
• Un cliente debe poder realizar un retiro de efectivo de cualquier cuenta adecuada vinculada al 
documento de identidad, en múltiplos de $50000. Se debe obtener la aprobación del banco antes de 
entregar efectivo.
• Un cliente debe poder realizar un depósito en cualquier cuenta vinculada al documento de identidad, 
consistente en efectivo y/o cheques. El cliente ingresará el monto del depósito en el cajero automático
e indicar si es efectivo o cheque.
• Un cliente debe poder realizar una transferencia de dinero entre dos cuentas cualesquiera vinculadas a 
al documento de identidad. 
• Un cliente debe poder realizar una consulta de saldo de cualquier cuenta vinculada al documento de 
identidad.
• El cajero automático comunicará al cliente los resultados de cada transacción dependiendo de su tipo. 
Ejemplo “retiro exitoso, puede tomar x dinero de la bandeja principal”
• Si el banco determina que el PIN del cliente no es válido, se le pedirá al cliente que vuelva a ingresar el 
PIN antes de que se pueda continuar con la transacción. Si el cliente no puede ingresar correctamente 
el PIN después de tres intentos saldrá de la aplicación. 
• El cajero automático tendrá un panel de operador con un interruptor que permitirá apagar o encender 
el cajero.*/