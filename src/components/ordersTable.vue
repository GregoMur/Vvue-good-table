<template>
    <vue-good-table 
        ref="MyCoolTable"
        class="ordersTable"
        :columns="columns"
        :rows="filtredOrders"
        :search-options="{
            enabled: true,
            skipDiacritics: true,
            placeholder: 'Введите номер заказа',
            value: 'value'
        }"
        :pagination-options="{
            enabled: true,
            mode: 'records',
            perPage: 25,
            perPageDropdown: [25, 50, 100],
            dropdownAllowAll: false,
            nextLabel: 'След.',
            prevLabel: 'Пред.',
            rowsPerPageLabel: 'Отобразить записей на странице',
            ofLabel: 'из'
        }"       
        :select-options="{
            enabled: true,
            selectOnCheckboxOnly: true,
        }"
        @on-selected-rows-change="selectionChanged"
    >
        <!-- Кнопки Отправить в ТК и Очистить фильтры -->
        <div slot="table-actions">
                <div class="header-buttons">
                    <button @click="createDelivery(selectedOrders)" class="filterButton">Отправить в ТК</button> 
                    <button @click="clearFilters" class="filterButton">Убрать фильтры</button>   
                </div>
                
        </div>

        <!-- Фильтры таблицы -->
        <template slot="column-filter" slot-scope="props"> 
            <!-- Фильтр по статусу -->    
                <div v-if="props.column.inputStatus" class="inputStatus">
                    <button @click="dropStatuses" class="filterButton">
                        Выберите статус
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>
                    </button>
                    <br>
                    <transition name="drop">
                        <div v-if="showStatuses" class="statuses">
                            <span v-for="(status,index) in statusOptions" :key="index"><input type="checkbox" :value="status"  v-model="statusValues">{{ status }}</span>
                        </div>
                    </transition>
                </div>

                <!-- Фильтр по дате создания -->
                <div v-if="props.column.inputDateCreated">
                    <date-picker
                        class="dateRange"
                        v-model="dateCreatedRange"
                        range
                        value-type="YYYY-MM-DD HH:mm:ss.SSS"
                        format="YYYY-MM-DD HH:mm:ss.SSS"
                        type="datetime"
                        placeholder="Выберите дату создания"
                    ></date-picker>
                </div>

                <!-- Фильтр по ТК -->
                <div v-if="props.column.inputDelivery" class="inputDelivery">
                    <button @click="dropDeliveries" class="filterButton">
                        Выберите ТК <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>
                    </button>
                    <br>
                    <transition name="drop">
                        <div v-if="showDeliveries" class="deliveries">
                            <span v-for="(delivery,index) in deliveryOptions" :key="index"><input type="checkbox" :value="delivery" v-model="deliveryValues">{{ delivery }}</span>
                        </div>
                    </transition>
                </div>

            <!-- Фильтр по дате изменения -->
                <div v-if="props.column.inputDateUpdated">
                    <date-picker
                        v-model="dateUpdatedRange"
                        range
                        value-type="YYYY-MM-DD HH:mm:ss.SSS"
                        format="YYYY-MM-DD HH:mm:ss.SSS"
                        type="datetime"
                        placeholder="Выберите дату изменения"
                    ></date-picker>
                </div>
        </template>

        <!-- Пользовательские строки -->
        <template slot="table-row" slot-scope="props">

            <span v-if="props.column.field == 'shop_id'">
                <span @click="$router.push({ name: 'item', params: {id: props.row} })" class="link">{{props.row.shop_id}}</span>
            </span>

            <span v-if="props.column.field == 'summ'">
                <span>{{props.row.summ}}</span>
            </span>

            <span v-if="props.column.field == 'status'">
                <span v-if="!props.row.loading">{{props.row.status}}</span>
                <span v-if="props.row.loading"><clip-loader class="custom-class" color="black" :size="15"></clip-loader></span>
            </span>

            <span v-if="props.column.field == 'createdAt'">
                <span>{{props.row.createdAt}}</span>
            </span>

            <span v-if="props.column.field == 'updatedAt'">
                <span>{{props.row.updatedAt}}</span>
            </span>

            <span v-if="props.column.field == 'delivery'">
                <span>{{props.row.delivery}}</span>
            </span>

            <span v-if="props.column.field === 'btn'">
                <drop-button 
                    :row="props.row"
                    :selectedOrders="selectedOrders"
                    v-on:createDelivery="createDelivery(selectedOrders)"
                ></drop-button>
            </span>
        </template>
    </vue-good-table>
    
</template>

<script>
    // datepicker
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';

    // Спинер
    import { ClipLoader } from '@saeris/vue-spinners'

    // Компонент Vue Good Table
    import 'vue-good-table/dist/vue-good-table.css'
    import { VueGoodTable } from 'vue-good-table'

    // Компонент кнопки с контекстным меню
    import dropButton from './dropMenuButton.vue'
    import { mapState, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                // Отмеченные записи через чекбокс
                selectedOrders: [],

                //  Значения передаваемые из фильтров

                // По дате создания
                dateCreatedRange: [null, null],

                //  По статусам
                statusValues: [],

                // По типу доставки
                deliveryValues: [],

                // По дате изменения
                dateUpdatedRange: [null, null],

                // Показывать статусы(true - да)
                showStatuses: false,

                // Показывать ТК(true - да)
                showDeliveries: false,
            }
        },

        components: {
            VueGoodTable,
            dropButton,
            DatePicker,
            ClipLoader,
        },

        computed: {
            
            filtredOrders() {
                if(!this.dateCreatedRange[0] && !this.dateCreatedRange[1] && !this.statusValues.length && !this.deliveryValues.length && !this.dateUpdatedRange[0] && !this.dateUpdatedRange[1]) {
                    return this.$store.state.ordersTEST
                } else {
                    let order = this.$store.state.ordersTEST;
                    if(this.dateCreatedRange[0] && this.dateCreatedRange[1]) {
                        let min = this.dateCreatedRange[0],
                        max = this.dateCreatedRange[1];
                        order = order.filter(row => row.createdAt >= min && row.createdAt <= max);
                        console.log('filter data - ' + order);
                    }
                    if(this.statusValues.length) {
                        let statuses = this.statusValues;
                        order = order.filter(row => statuses.includes(row.status));
                    }
                    if(this.deliveryValues.length) {
                        let deliveries = this.deliveryValues;
                        order = order.filter(row => deliveries.includes(row.delivery))
                    }
                    if(this.dateUpdatedRange[0] && this.dateUpdatedRange[1]) {
                        let min = this.dateUpdatedRange[0],
                        max = this.dateUpdatedRange[1];
                        order = order.filter(row => row.updatedAt >= min && row.updatedAt <= max)
                    }
                    return order
                }
                
            },
            ...mapState([
                'columns',
                'orders',
                'pagination',
            ]),
            // Уникальные статусы и ТК
            ...mapGetters([
                'statusOptions',
                'deliveryOptions'
            ])  
        },

        methods: {
            // Выбор записей через checkbox и добавление их в массив "selected"
            selectionChanged(params) {
                this.selectedOrders = params.selectedRows;
            },

            // // Изменить значение showStatuses
            dropStatuses() {
                this.showStatuses = !this.showStatuses;
            },
            dropStatusesHide() {
                this.showStatuses = false
            },
            // // Изменить значение showDeliveries
            dropDeliveries() {
                this.showDeliveries = !this.showDeliveries;
            },
            dropDeliveriesHide() {
                this.showDeliveries = false
            },
            
            clearFilters() {
                // По дате создания
                this.dateCreatedRange = [null, null];

                //  По статусам
                this.statusValues = [];

                // По типу доставки
                this.deliveryValues = [];

                // По дате изменения
                this.dateUpdatedRange = [null, null];
            },

            // Отправка заказа в ТК
            createDelivery(selectedOrders) {
                let selectedOrdersId = [];
                for(let i=0; i<selectedOrders.length; i++) {
                    if(selectedOrders[i].status != 'Отправлен в ТК'){
                        selectedOrders[i].loading = true;
                        selectedOrdersId.push(selectedOrders[i].shop_id);
                    }
                }
                this.$store.dispatch('createDelivery',selectedOrdersId);
            },
            
            // Демонстрация спинера
            // sent(se) {
            //     for(let i=0; i<se.length; i++) {
            //         if(se[i].status !== 'Отправлен в ТК') {
            //             se[i].status = ''
            //         } else {
            //             continue
            //         }
            //         setTimeout(()=>se[i].status = 'Отправлен в ТК',5000);
            //     }
            // }
        }
    }
</script>

<style>
    /* .ordersTable {
        min-height: 100vh;
        max-height: 100vh;
        overflow-y: scroll;
    } */
    .vgt-inner-wrap {
        display: flex;
        height: 100vh;
        flex-direction: column;
    }
    .vgt-responsive {
        flex-grow: 1;
    }
    .vgt-global-search {
       padding: 10px 0;
    }
    tbody tr td, thead tr th{
       text-align: center !important;
       vertical-align: middle !important;
       height: 5px !important;
       padding: 0 !important;
    }
    thead tr th {
       text-align: center !important;
       vertical-align: middle !important;
       height: 10px !important;
       padding: 5px !important;
    }
    .filterButton {
        width: 150px;
        padding: 7px;
        font-size: 14px;
        background-color: #ffffff;
        color: rgb(117,117,117);
        border: none;
        border-radius: 4px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .header-buttons .filterButton {
        width: 150px;
        margin: 0 5px;
        padding: 7px;
        background-color: #ffffff;
        color: rgb(117,117,117);
        border: none;
        border-radius: 4px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .header-buttons .filterButton:hover {
        background-color: rgb(76 127 229);
        color: rgb(255, 255, 255);
        transition-duration: .5s;
    }
    .inputStatus, .inputDelivery {
        position: relative;
    }
    .deliveries, .statuses {
        position: absolute;
        background-color: #ffffff;
        width: 150px;
        max-height: 90px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 14px;
        border-radius: 2px;
    }
    .deliveries span, .statuses span {
        padding: 10px;
    }
    .inputStatus .bi-caret-down, .inputDelivery .bi-caret-down {
        position: absolute;
        top: 8px;
        right: 5px;
    }
    .link {
        padding: 3px;
        font-weight: bold;
        transition-duration: .3s;
    }
    .link:hover {
        cursor: pointer;
        background-color: #4d5c7a;
        border-radius: 4px;
        color: white;
        transition-duration: .3s;
    }
    .drop-enter-active, .drop-leave-active {
        transition: all .3s;
    }
    .drop-enter, .drop-leave-to{
        opacity: 0;
        transform: translateY(-20px);
    }   
</style>

