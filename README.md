# WORKSHOP_06

In this workshop, you will advance your mastery of Vue.js by exploring component communication and handling the application's lifecycle. The goal is to build a Dynamic User Dashboard that demonstrates unidirectional data flow and code execution upon page initialization.

The project must include the following:

* **Component Structure:** Clear separation between a parent component (`App.vue`) and at least two child components (e.g., `UserProfile.vue` and `UserStats.vue`).

* **Use of Props:** The parent component must centralize the user's data and distribute it to the child components using properties (`defineProps`).

* **Lifecycle (`onMounted`):** Implement the `onMounted` hook to simulate data loading. When the page loads, the initial values should be empty and automatically "populate" after the component is mounted.

* **Reactivity and Styles:** Use `ref` for the loaded data and apply basic styles (you can use Bulma or native CSS with the `scoped` attribute).

## Submission Procedure
For the evaluation of this workshop, the professional workflow used in previous classes will be strictly followed:

1. **Clone the repository:**
   `https://github.com/LBrownI/workshop6_G003`.

2. **Work location:** Each student must work exclusively within the folder that bears their name.

3. **Submission:** The submission will be considered valid only if it is done via a **Pull Request** to the main branch of the repository before the module closes.

## Bonus Point
* **+1 point on the Workshop grade:** Implement a Custom Event (`$emit`) where a child component notifies the parent of a change (for example, an "Update Name" button inside the child that modifies the state in the parent).