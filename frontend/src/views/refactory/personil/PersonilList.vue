<!-- =========================================================================================
    File Name: tableFilterSorter.vue
    Description: Add filter and sorting functionality to table
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Filter and Sorter">
        
        <p>You can add the Filter functionality by adding the <code>search</code> property</p><br>

        <p>if you need a property to be sorted you just have to add the <code>sort-key</code> property and the value you need to be sorted</p><br>

        <vs-table max-items="10" pagination stripe search :data="personils">

            <template slot="thead">
                <vs-th sort-key="id">NPP</vs-th>
                <vs-th sort-key="username">Name</vs-th>
                <vs-th sort-key="email">Email</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    
                    <vs-td :data="data[indextr].id">
                        {{data[indextr].npp}}
                    </vs-td>

                    <vs-td :data="data[indextr].username">
                        {{data[indextr].nama_lengkap}}
                    </vs-td>

                    <vs-td :data="data[indextr].email">
                        {{data[indextr].email_internet}}
                    </vs-td>
                    
                    <template class="expand-user" slot="expand">
                        <div class="con-expand-users w-full">
                            <div class="con-btns-user flex items-center justify-between">
                                <div class="con-userx flex items-center justify-start">
                                    <vs-avatar :badge="tr.id" size="45px" :src="`https://randomuser.me/api/portraits/women/${indextr}.jpg`" />
                                    <span>{{ tr.name }}</span>
                                </div>
                                <div class="flex">
                                    <vs-button type="border" size="small" icon-pack="feather" icon="icon-phone" class="mr-2"></vs-button>
                                    <vs-button type="border" size="small" icon-pack="feather" icon="icon-send" color="success" class="mr-2"></vs-button>
                                    <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" color="danger"></vs-button>
                                </div>
                            </div>
                            <vs-list>
                                <vs-list-item icon-pack="feather" icon="icon-mail" :title="tr.email"></vs-list-item>
                                <vs-list-item icon-pack="feather" icon="icon-globe" :title="tr.website"></vs-list-item>
                            </vs-list>
                        </div>
                    </template>
                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            /* 
            users: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "website": "anastasia.net",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "website": "ramiro.info",
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "website": "kale.biz",
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "website": "demarco.info",
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "website": "ola.org",
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "website": "elvis.io",
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "website": "jacynthe.com",
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                    "website": "conrad.com",
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "username": "Moriah.Stanton",
                    "email": "Rey.Padberg@karina.biz",
                    "website": "ambrose.net",
                },
            ]
             */
            personils :[]
        }
    },

    async mounted (){
        this.getPersonilList()
        /* const response = await axios.get('http://localhost:4001/tasks/')
        this.tasks = response.data */
    },
    
    methods:{
        async getPersonilList() {
            const response = await axios.get('/personils/getPersonilList')
            // console.log(response)
            this.personils = response.data
        },
    }
}
</script>