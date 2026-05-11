# Rúbrica de Evaluación - Taller #6 (Vue.js 3)

**Ejecución del Proyecto:** El proyecto debe compilar y ejecutarse correctamente al correr el comando `npm run dev`. Si la aplicación lanza errores fatales por consola que impiden su renderizado, o si el código entregado no corresponde a un proyecto Vue válido, la calificación es automáticamente la nota mínima (**1.0**).

---

## Rúbrica de Evaluación (Distribución de 6.0 puntos)

### 1. Estructura y Modularidad (1.5 puntos)
* **Logrado (1.5):** La interfaz está correctamente dividida. Existe un componente padre (`App.vue`) que importa y renderiza al menos dos componentes hijos distintos (ej. `UserProfile.vue`, `UserStats.vue`).
* **Medianamente Logrado (0.7):** Crea componentes hijos, pero la separación lógica no es clara o incluye demasiada interfaz en el componente padre.
* **No Logrado (0.0):** Todo el código está amontonado en `App.vue` sin instanciar componentes hijos.

### 2. Flujo de Datos con Props (1.5 puntos)
* **Logrado (1.5):** El componente padre declara el estado (datos) y lo pasa correctamente a los hijos utilizando la directiva `:` (`v-bind`) y recibiéndolos con `defineProps`.
* **Medianamente Logrado (0.7):** Intenta usar props, pero define los datos directamente en el componente hijo o comete errores de sintaxis al inyectarlos en el template.
* **No Logrado (0.0):** No utiliza props; cada componente maneja datos aislados que no se comunican entre sí.

### 3. Ciclo de Vida y Reactividad (1.5 puntos)
* **Logrado (1.5):** Utiliza correctamente `ref` para declarar datos iniciales vacíos y usa el hook `onMounted` para actualizar esos valores simulando una carga inicial.
* **Medianamente Logrado (0.7):** Usa `ref` correctamente, pero no utiliza `onMounted` (puebla los datos estáticamente desde el inicio) o viceversa.
* **No Logrado (0.0):** No hay reactividad ni uso del ciclo de vida.

### 4. Flujo de Trabajo en GitHub (1.5 puntos)
* **Logrado (1.5):** Clona el repositorio oficial, trabaja exclusivamente dentro de su carpeta personal, y realiza el Pull Request hacia la rama principal con sus cambios.
* **Medianamente Logrado (0.7):** Realiza el Pull Request, pero modifica archivos fuera de su carpeta o incluye la carpeta `node_modules`.
* **No Logrado (0.0):** No realiza el Pull Request o entrega el trabajo por un canal no autorizado.

---

## 🌟 Bonificación

* **Eventos Personalizados (`$emit`): +1.0 punto a la nota final.** El estudiante logra que un componente hijo modifique el estado del padre emitiendo un evento y pasando un payload (dato nuevo).
