<script setup>
  const props = defineProps({                                                   
    stats: Object
  })                                                                            
                  
  const emit = defineEmits(['avanzar-semestre'])

  function avanzar() {                                                          
    emit('avanzar-semestre', props.stats.asignaturas + 1)
  }                                                                             
  </script>       

  <template>
    <div class="card">
      <h3>Estadísticas Académicas</h3>                                          
      <hr />
      <div class="stats">                                                       
        <div class="stat">                                                      
          <span class="label">ASIGNATURAS APROBADAS</span>
          <span class="valor">{{ stats.asignaturas }}</span>                    
        </div>    
        <div class="stat">                                                      
          <span class="label">PROMEDIO ACUMULADO</span>
          <span class="valor">{{ stats.promedio }}</span>                       
        </div>    
      </div>
      <button @click="avanzar">Avanzar Semestre (+1 Asignatura)</button>        
    </div>
  </template>                                                                   
                  
  <style scoped>
  .card {
    border: 1px solid #d4d4d4;
    border-radius: 8px;                                                         
    padding: 1.2rem;
  }                                                                             
  h3 {            
    margin: 0 0 0.8rem;
    font-size: 1.1rem;                                                          
    color: #000000;
  }                                                                             
  hr {            
    border: none;
    border-top: 1px solid #eee;
    margin-bottom: 1.2rem;
  }                                                                             
  .stats {
    display: flex;                                                              
    justify-content: space-around;
    margin-bottom: 1.5rem;
  }
  .stat {
    display: flex;                                                              
    flex-direction: column;
    align-items: center;                                                        
    gap: 0.4rem;  
  }
  .label {
    font-size: 0.75rem;
    color: #8e8e8e;                                                             
    letter-spacing: 0.05em;
  }                                                                             
  .valor {        
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
  }                                                                             
  button {
    width: 100%;                                                                
    padding: 0.9rem;
    background: #10dcb3;
    color: white;
    border: none;                                                               
    border-radius: 6px;
    font-size: 1rem;                                                            
    cursor: pointer;
  }
  button:hover {
    background: #16a085;
  }
  </style>
