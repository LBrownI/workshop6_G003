 <script setup>
  defineProps({
    user: Object                                                                
  })
  </script>                                                                     
                  
  <template>
    <div class="card perfil">
      <img src="https://via.placeholder.com/60" alt="placeholder image" />                 
      <div class="info">                                                        
        <h2>{{ user.nombre }}</h2>                                                
        <p>{{ user.carrera }}</p>                                               
      </div>      
    </div>
  </template>

  <style scoped>
  .card {
    border: 1px solid #eee;                                                     
    border-radius: 8px;
    padding: 1.2rem;                                                            
  }               
  .perfil {
    display: flex;
    align-items: center;
    gap: 1rem; 
    color: #7f8c8d;                                                                 
  }
  .perfil img {                                                                 
    width: 60px;  
    height: 60px;
    border-radius: 8px;
  }
  h2 {                                                                          
    margin: 0;
    font-size: 1.3rem;                                                          
    color: #2c3e50;
  }

  p {
    margin: 0.2rem 0 0;
    color: #7f8c8d;                                                             
  }
  </style>