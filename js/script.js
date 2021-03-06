const app = new Vue({
    el: "#root",
    data: {
        emails: []
    },
    methods: {},
    mounted: function() {
        for (let i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((element) => {
                    const email = element.data.response;
                    this.emails.push(email);
                });
        }
    }
});