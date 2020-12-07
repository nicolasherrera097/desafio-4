const app = new Vue({
    el: '#app',
    data: {
        productos: [],
        n: '',
        d: '',
        p: 0,
    },
    methods:{
        agregarProducto: function(){
            console.log("Agregando producto ...");
            this.productos.push({
                nombre: this.n,
                descripcion: this.d,
                precio: this.p
            });
            this.n = "";
            this.d = "";
            this.p = 0;
        },
        editarProducto: function(index){
            console.log("Editando producto ...")
        },
        eliminarProducto: function(index){
            console.log("Eliminando producto ...")
            this.productos.splice(index, 1);
        }
    }
})