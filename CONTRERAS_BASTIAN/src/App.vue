  <script setup>
  import { ref, onMounted } from 'vue'                                          
  import UserProfile from './components/UserProfile.vue'
  import UserStats from './components/UserStats.vue'                            
                                              
  const user = ref(null)                  
  const stats = ref(null)
                                                                                
  onMounted(() => {
    setTimeout(() => {                                                          
      user.value = {   
        nombre: 'Bastian Contreras',
        carrera: 'Ingenieria Civil Informatica',
      }                                       
      stats.value = {                     
        asignaturas: 40,
        promedio: 5.8,                                                          
      }
    }, 800)                                                                     
  })                   
                                              
  function handleAvanzarSemestre(nuevasAsignaturas) {
    stats.value = { ...stats.value, asignaturas: nuevasAsignaturas }
  }                                                                             
  </script>
                                                                                
  <template>           
    <div class="dashboard">
      <h1>Dashboard del Estudiante</h1>
      <div v-if="!user">Cargando...</div>     
      <div v-else class="contenido">      
        <UserProfile :user="user" />
        <UserStats :stats="stats" @avanzar-semestre="handleAvanzarSemestre" />  
      </div>                                  
    </div>                                                                      
  </template>          
                                                                                
  <style scoped>
  .dashboard {                                                                  
    max-width: 1000px;  
    margin: 40px auto;
    background: white;
    border-radius: 12px;                      
    padding: 2rem;                        
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    font-family: 'Segoe UI', sans-serif;                                        
  }
  h1 {                                                                          
    text-align: center;                       
    font-size: 2rem;                      
    color: #000000;
    margin-bottom: 1.5rem;                                                      
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;                                                       
  }                                           
  .contenido {                            
    display: flex;
    flex-direction: column;                                                     
    gap: 2rem;
  }                                                                             
  </style>             

                 
