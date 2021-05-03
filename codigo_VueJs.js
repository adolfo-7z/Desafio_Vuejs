document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#appProductos',
        data: {
            nombre: '',
            desc: '',
            precio: '',
            formEditar: false,
            idEditar: -1,
            nombreEditar: '',
            descEditar: '',
            precioEditar: '',
            productos: [] 
        },
        methods: {
            crearProducto: function () {
                this.productos.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    desc: this.desc,
                    precio: this.precio
                });
                this.nombre = '';
                this.desc = '';
                this.precio = '';
            },
            verFormularioEditar: function (producto_id) {
                this.idEditar = producto_id;
                this.nombreEditar = this.productos[producto_id].nombre;
                this.descEditar = this.productos[producto_id].desc;
                this.precioEditar = this.productos[producto_id].precio;
                this.formEditar = true;
            },
            borrarProducto: function (producto_id) {
                this.productos.splice(producto_id, 1);
            },
            guardarCambios: function (producto_id) {
                this.formEditar = false;
                this.productos[producto_id].nombre = this.nombreEditar;
                this.productos[producto_id].desc = this.descEditar;
                this.productos[producto_id].precio = this.precioEditar;
            }
        }
    });
});