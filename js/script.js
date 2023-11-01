// # ESERCIZIO VUE TO DO LIST
// > Rifare l'esercizio della to do list.





// ### MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// ### MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// > ### Bonus:
// - 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
//  - 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa)
//  - 3- Bonus Super (superfacoltativo ): usare id invece di indici nei metodi
////////////////////////////////////////////////////////////////////////////////////////////


const {createApp} = Vue

createApp({
    data(){
        return {
            project :[
                {   text: 'Hulk Amigurumi',
                    done: false,
                    image :'/img/hulk-amigurumi.png',
                    id: 1
                },
                {
                    text: 'Captain America Amigurumi',
                    done: true,
                    image :'/img/captain-america.png',
                    id: 2
                },
                {
                    text: 'Peas Amigurumi',
                    done: false,
                    image : '/img/peas-crochet.png',
                    id: 3
                },
                {
                    text: 'Bee Amigurumi',
                    done: true,
                    image: '/img/bee-crochet.png',
                    id: 4
                }
            ],
            lastId : 4,
        }
    },
    methods :{
        removeTasks(index){
            this.project.splice(index,1)
        }
    }

}).mount('#app');

