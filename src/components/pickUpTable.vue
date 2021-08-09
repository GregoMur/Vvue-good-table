<template>
    <div>
        <button @click="createDelivery">Оформить доставку</button>
        <button @click="cancelDelivery" :disabled="!rows.length">Отменить доставку</button>
        <vue-good-table
        class="deliveryTable"
        ref='delivery'
        :columns="columns"
        :rows="rows"
        :group-options="{
            enabled: true,
            collapsable: true
        }"
        >
        <template slot="table-header-row" slot-scope="props">
                <div v-if="props.column.field == 'action'" class="actionButtons">
                    <span title="Печать документов">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                        </svg>
                    </span>
                    <span title="Отменить доставку">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                        </svg>
                    </span>
                </div>
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>
    </div>
</template>

<script>
    // Компонент Vue Good Table
    import 'vue-good-table/dist/vue-good-table.css'
    import { VueGoodTable } from 'vue-good-table'

    export default {
        data() {
            return {
                columns: [
                    {
                        label: 'Номер заказа',
                        field: 'shop_id',
                    },
                    {
                        label: 'Статус',
                        field: 'status',
                    },
                     {
                        label: 'Дата создания',
                        field: 'createdAt',
                    },
                    {
                        label: 'ТК',
                        field: 'delivery',
                    },
                    {
                        label: '',
                        field: 'action',
                        sortable: false
                    },
                ],
                rows: []
            }
        },
        components: {
            VueGoodTable,
        },
        methods: {
            // Имитация добавления доставки
            createDelivery() {
                let options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timezone: 'UTC',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                };
                let curentDate = new Date().toLocaleDateString('ru',options);
                this.rows.push({
                    shop_id:`Доставка от ${curentDate}`,
                    children: [
                        { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Ожидает отправки", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
                        { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Ожидает отправки", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
                        { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Ожидает отправки", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
                    ]
                })
            },
            cancelDelivery() {
                this.rows.pop();
            }
        }
    }
</script>

<style>
    .deliveryTable {
        max-height: 100vh;
        overflow-y: scroll;
    }
    .actionButtons {
        display: flex;
        justify-content: space-evenly;
    }
    .actionButtons span:hover {
        color: rgb(219, 19, 36);
        transition-duration:  .5s;
    }
</style>
