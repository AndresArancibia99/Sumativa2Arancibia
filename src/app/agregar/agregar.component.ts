import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
 
  @Output() emisor = new EventEmitter <any>();  
  productos: any = [];
  datos!: String;
  FormularioProducto = new FormGroup({

    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl (''),
    cantidad: new FormControl (''),
    descripcion: new FormControl ('')
  });

  Guardar(){
    let inicio = this.productos.findIndex(p => p.codigo == this.FormularioProducto.value.codigo)
    if(inicio != -1){
    this.productos[inicio] = this.FormularioProducto.value;
    alert("Producto Modificado");
    }
    else{
      //Push 
      this.productos.push(this.FormularioProducto.value);
      //Reset Form
      this.FormularioProducto.reset();
      alert("Producto Agregado");
    }
  }

  Eliminar(codigo: string){
    this.productos = this.productos.filter
    (producto => producto.codigo != codigo);
    alert("Producto Eliminado");
  }

  Actualizar(codigo: String){
    alert("Al momento de modificar un producto no cambiar el codigo, ya que si se modifica se toma como un nuevo registro !")
   this.productos.find((element:any) =>{ if(element.codigo == codigo){
     let Update = {
       codigo: element.codigo,
       nombre: element.nombre,
       precio: element.precio,
       cantidad: element.cantidad,
       descripcion: element.descripcion

     }
     this.FormularioProducto.setValue(Update);
   }
   });
  }
  

  pagar(){
    
    let suma = 0;
    let total = 0;

    for(let i = 0; i>this.productos.length;i++){   
      suma = suma + (parseInt(this.productos[i].precio) * parseInt(this.productos[i].cantidad)); 
    
      total = suma * 0.19;
    
        
    }
    alert("La compra fue registrada!");
  }
  



  
  //let arreglo = []
    //for(var i = 0; i < arreglo.length; i++){

    //}
    /*this.datos = `Codigo=${this.FormularioProducto.value.codigo}
    Nombre=${this.FormularioProducto.value.nombre}
    Precio=${this.FormularioProducto.value.precio}
    Cantidad=${this.FormularioProducto.value.cantidad}
    Descripcion=${this.FormularioProducto.value.descripcion}
    `;
    */
}