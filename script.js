const contador = new Vue({
    el: "#app",
    data: {
        count: 0,
        class_name: "contador-bloco",
        id_name: "contador-action-iniciar"
    },
    methods: {
        start() {
            setInterval(() => {
                this.count ++;
                this.class_name += " rotate-bloco";
                this.id_name = "disable-button";
            }, 500)
        }
    },
})