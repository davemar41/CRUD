const app=new Vue({

    el: '#app',
    data: {
        titulo:'Tareas para realizar',
        tareas:[],
        nuevaTarea:''

    },
    methods:{
        agregar: function(){
            console.log('diste click ',this.nuevaTarea)
            this.tareas.push({
                nombre:this.nuevaTarea,
                estado: false
            });
            console.log(this.tareas)
            this.nuevaTarea=''
            
        },cambiarEstado: function(index){
            console.log('editar',index);
            this.tareas[index].estado=true
        },
        eliminarTarea: function(index){
            console.log('elimiar',index);
            this.tareas.splice(index,1);
        },
        editarTarea: function(index){
            this.tareas[index].nombre=this.nuevaTarea
            this.nuevaTarea=''
        }

    }

});