<template>
    <div class="page-log-in">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title has-text-centered">ورود</h1>
                <form @submit.prevent="submitForm">

                     <!-- User name -->
                      <div class="field">
                          <label for="email" class="rtl">Email</label>
                          <div class="control">
                              <input type="email" name="email" class="input" v-model="username">
                          </div>
                      </div>

                    <!-- Password -->
                      <div class="field">

                          <label class="rtl" for="password">رمز عبور</label>
                          <div class="control">
                              <input type="password" name="password" class="input" v-model="password">
                          </div>
                      </div>

                    <!-- Erros -->
                    <div class="notification is-danger rtl" v-if="errors.length">
                        <p v-for="error in erros" v-bind:key="error">
                            {{ error }}
                        </p>
                    </div>

                    <!-- Sign Up button -->
                    <div class="field rtl">
                        <div class="control">
                            <button class="button is-success">ورود</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'LogIn',
    data () {
        return {
            username: '',
            password: '',
            errors: []
        }
    }, 
    methods: {
        submitForm(e) {
            axios.defaults.headers.common['Authorization'] = ""
            localStorage.removeItem('wistoken')
            const formData = {
                username: this.username,
                password: this.password
            }

            axios
                .post("/api/v1/token/login/", formData)
                .then(response => {
                    const wistoken = response.data.auth_token
                    this.$store.commit('setToken', wistoken)
                    axios.defaults.headers.common['Authorization'] = "Token "+ wistoken
                    localStorage.setItem('wistoken', wistoken)
                    this.$router.push('/dashboard')
                })
                .catch(error => {
                    if(error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                        console.log(JSON.stringify(error.response.data));
                    } else if(error.message) {
                        console.log(JSON.stringify(error.message));
                    } else {
                        console.log(JSON.stringify(error));
                    }
                });
        }
    },
}
</script>

<style lang="scss">
    .rtl {
        float: right;
        direction: rtl;
    }
</style>