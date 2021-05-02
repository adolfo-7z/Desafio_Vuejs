document.addEventListener('DOMContentLoader', function() {
    new Vue({
        el: '#app',
        data: {
            nombre: '',
            descripcion: '',
            precio: '',
            editarForm: false,
            editarId: -1,
            nombreEditar: '',
            descEditar: '',
            precioEditar: '',
            productos: []
        },
        methods: {
            borrarProducto: function (producto_id) {
                this.productos.splice(producto_id, 1);
            },
            añadirProducto: function () {
                this.productos.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    descripcion: this.descripcion,
                    precio: this.precio
                });
                this.nombre = '';
                this.descripcion = '';
                this.precio = '';
            },
            guardarCambios: function (producto_id) {
                this.editarForm = false;
                this.productos[producto_id].nombre = this.nombreEditar;
                this.productos[producto_id].descripcion = this.descEditar;
                this.productos[producto_id].precio = this.precioEditar;
            },
            verFormularioEditar: function (producto_id) {
                this.editarId = producto_id;
                this.nombreEditar = this.productos[producto_id].nombre;
                this.descEditar = this.productos[producto_id].descripcion;
                this.precioEditar = this.productos[producto_id].precio;
                this.editarForm = true;
            },
        }
    })

});
