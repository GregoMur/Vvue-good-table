<template>
    <!-- Кнопка с контекстным меню -->
    <div class="dropMenu">
        
        <div class="dropMenu_button__three-dots-vertical">
            <svg  xmlns="http://www.w3.org/2000/svg" width="22.15" height="22.15" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"
                v-on-clickaway="dropHide"
                @click="dropShow">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
        </div>
        <transition name="fade">
            <div class="dropMenu_values" v-if="dropIsShow">
                <ul>
                    <li @click="$router.push({ name: 'item', params: {id: row} })">Просмотр</li>
                    <li v-on:click="$emit('createDelivery')">Отправить в ТК</li>
                    <li v-if="row.status=='Отправлен в ТК'">Распечатать ярлык</li>
                </ul>
            </div>
        </transition>
    </div>
</template>


<script>

import { directive as onClickaway } from 'vue-clickaway'

export default {
    data() {
        return {
            dropIsShow:false
        }
    },

    props:{
        row: {
            type: Object
        },
    },

    methods: {
        dropShow() {
            this.dropIsShow = !this.dropIsShow
        },
        dropHide() {
            this.dropIsShow = false
        },
    },
    directives: {
        onClickaway
    }
}
</script>

<style scoped>

    .dropMenu_button__three-dots-vertical, .dropMenu_values ul li{
        cursor: pointer;
    }

    .dropMenu {
        position: relative;
    }
    .dropMenu_values {
        position: absolute;
        width: 190px;
        background-color: rgb(255, 255, 255);
        top: -48px;
        right: 25px;
        border-radius: 5px;
        transition-duration: 1s;
    }

    .dropMenu_values ul {
        list-style: none;
        padding: 0;
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: start;
    } 

    .dropMenu_values ul li {
        padding: 10px;
    }

    .dropMenu_values ul li:hover {
        background-color: rgb(76 127 229);
        color: rgb(255, 255, 255);
        transition-duration: 0.5s;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>