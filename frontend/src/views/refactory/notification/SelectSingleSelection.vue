<!-- =========================================================================================
    File Name: SelectSingleSelection.vue
    Description: Single Selection
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Validating multiple rules" code-toggler>

        <p>You can validate multiple rules using <code>|</code>. You can find more validation rules <a href="https://baianat.github.io/vee-validate/guide/rules.html" target="_blank" rel="nofollow">here</a></p>
        <div class="mt-5">
            <form>
                <div class="vx-row w-1/2">
                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'required|alpha_dash'" placeholder="From" name="username" v-model="username" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('username')">{{ errors.first('username') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'required|email'" placeholder="To" name="email" v-model="email" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>

                    <div class="vx-col w-full">
                        <vs-input v-validate="'required|alpha'" placeholder="Message" name="name" v-model="name" class="mt-5 w-full" />
                        <span class="text-danger text-sm"  v-show="errors.has('name')">{{ errors.first('name') }}</span>
                    </div>
                </div>
                <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>
            </form>
        </div>
    </vx-card>
</template>

<script>
export default{
	data() {
		return {
		}
	}
}
</script>
