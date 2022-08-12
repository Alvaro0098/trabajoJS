class Producto {
    constructor(id, nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
      this.id = id;
  }
}
  

  const productos = []; 
  productos.push(new Producto( 1 ,"hamburguesa", 500))    
  productos.push(new Producto( 2 ,"pancho", 300))
  productos.push(new Producto( 3 ,"carlitos", 400))
  productos.push(new Producto( 4 ,"papas fritas", 200))
  productos.push(new Producto( 5 ,"gaseosa", 100))
  
  const elegir_producto = () => {
  
    let elegir = ""
  
    for (const index of productos){
      elegir = elegir + "\n" + index.id  + " " + index.nombre + " " + index.precio 
    }
    
  
    let compro = parseInt(prompt("elija un producto" + "\n" + elegir));
  
    while( isNaN(compro) || compro < 1 || compro > productos.length) {
      compro = parseInt(prompt(`ingrese un numero que este en el menu ${elegir}`)) ;
    }
    return productos[compro - 1]
  }
  
  let producto = elegir_producto()
  console.log(producto)
  
  
  const cuotas_disponibles = [3,6,12];
  
  
  const cant_cuotas = () =>{

    let texto_cuotas = ""

    for (const cuota of cuotas_disponibles.entries()){

      texto_cuotas = `${texto_cuotas} \n ${cuota[0] + 1}.${cuota[1]}`
    }
    
    let cuota_elegida = parseInt(prompt("elija en cuantas cuotas quiere comprar el producto" + "/n" + texto_cuotas))

    while( isNaN(cuota_elegida) || cuota_elegida < 1 || cuota_elegida > cuotas_disponibles.length) {
      cuota_elegida = parseInt(prompt(`ingrese un numero que este en el menu ${texto_cuotas}`)) ;
    }
    
    if (cuota_elegida == 1)
     alert(producto.precio / 3)
    else if (cuota_elegida == 2)
      alert(producto.precio / 6)
    else
      alert(producto.precio/12)
  }


 const cuotas_selecc = cant_cuotas()
 console.log(cuotas_selecc)