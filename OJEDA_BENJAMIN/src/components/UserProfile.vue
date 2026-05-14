<script>
import { ref } from 'vue'
export default {
	props: {
		nombre: {
			type: String,
			required: true
		},
		carrera: {
			type: String,
			required: true,
			default: 'Carrera sin ingresar'
		},
        foto:{
            type: String,
			required: false
        }
	}
};
</script>
//me falta la imagen a la izq   
<template> 
    <div id="usuarios">
        <h3> {{ nombre }}</h3>
        <p>{{ carrera }}</p>
    </div>
</template>
<style>
    #usuarios{
        width:800px;
        height:60px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 0 20px 20px 20px;
        box-shadow:2px 2px 10px 10px  black;
    }
    h3{
        color: black
    }
</style>