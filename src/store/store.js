//Importamos el store
import { writable } from "svelte/store";
//Creamos una variable que de forma global se va a encontrar en el estado y podremos usarla en todo el proyecto, inicializada en 0
export const count = writable(0);
