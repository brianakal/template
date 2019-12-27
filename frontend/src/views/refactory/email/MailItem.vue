<!-- =========================================================================================
    File Name: MailItem.vue
    Description: Mail Item - Displays mail item
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div class="mail__mail-item sm:px-4 px-2 py-6" :class="{'mail__opened-mail': !mail.unread}">

        <!-- MAIL ROW 1 : META -->
        <div class="flex w-full">
            <vs-avatar class="sender__avatar flex-no-shrink mr-3 border-2 border-solid border-white" src="http://placehold.it/300" size="40px"></vs-avatar>

            <div class="flex w-full justify-between items-start">
                <div class="mail__details">
                    <h5 class="mb-1" :class="{'font-semibold': mail.isread}">{{ mail.from }}</h5>
                    <span v-if="mail.subject">{{ mail.subject }}</span>
                    <span v-else>(no subject)</span>
                </div>

                <div class="mail-item__meta flex items-center">
                    <div class="email__labels hidden sm:flex items-center">
                        <!-- <div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + labelColor(label)" v-for="(label, index) in mail.labels" :key="index"></div> -->
                    </div>
                    <span>{{ mail.created_at | niceDate }}</span>
                </div>
            </div>
        </div>
        <!-- /MAIL ROW 1 -->

        <!-- MAIL ROW 2 : MSG & ACTIONS -->
        <div class="flex w-full">
            <div class="flex items-center ml-1">
                <vs-checkbox v-model="isSelectedMail" @click.stop class="vs-checkbox-small ml-0 mr-1"></vs-checkbox>
                <feather-icon icon="StarIcon" class="cursor-pointer" :svgClasses="[{'text-warning fill-current stroke-current': mail.isstarred}, 'w-5', 'h-5']" @click.stop="toggleIsStarred"></feather-icon>
            </div>
            <div class="mail__message truncate ml-3">
                <span>{{ mail.message | filter_tags }}</span>
            </div>
        </div>
        <!-- /MAIL ROW 2 -->
    </div>
</template>

<script>
export default{
    filters: {
        niceDate(date) {
            const myDate = new Date(date)
            return myDate.getDate() + ' ' + parseInt(myDate.getMonth() + 1) + ' ' + myDate.getFullYear()
        }
    },
    props: {
        mail: {
            type: Object,
            required: true,
        },
        isMailOpen: {
            type: Boolean,
        },
        isSelected: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            isSelectedMail: this.isSelected,
        }
    },
    watch: {
        isSelected(value) {
            this.isSelectedMail = value
        },
        isSelectedMail(val) {
          if(val) this.$emit('addToSelected', this.mail.id)
          else this.$emit('removeSelected', this.mail.id)
        }
    },
    computed: {
        labelColor() {
            return (label) => {
                const tags = this.$store.state.surat.mailTags;
                return tags.find((tag) => {
                    return tag.value == label
                }).color
            }
        },
    },
    methods: {
        toggleIsStarred() {
            const payload = {mailId: this.mail.id, value : !this.mail.isStarred}
            this.$store.dispatch('surat/toggleIsMailStarred', payload)
        }
    }
}
</script>
