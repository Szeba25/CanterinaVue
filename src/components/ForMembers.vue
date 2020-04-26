<template>
    <div>
        <h2>OK</h2>
        <input type="button" v-bind:value="$t('login.signOut')" @click="logout()">
    </div>
</template>

<script>
import Axios from "axios";

export default {
    name: "ForMembers",

    methods: {
        logout() {
            Axios.get("api/logout.php")
                .then(() => {
                    this.$router.push({name: "Login"}).catch(() => {
                        console.log("Unauthorized");
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>

<style scoped>

</style>
