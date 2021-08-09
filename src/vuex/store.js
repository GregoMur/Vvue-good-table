import Vue from 'vue'

// Импортирем Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// Создаем экземпляр хранилища
const store = new Vuex.Store({
   state: {
      // Тестовые записи
      ordersTEST:[
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "В обработке", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "Доставь САМ", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отправлен в ТК", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-03 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-04 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-05 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-06 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "CDEK", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-07 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "BOXBERRY", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-08 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "BOXBERRY", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-09 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "BOXBERRY", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-10 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "BOXBERRY", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-11 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "BOXBERRY", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-12 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "BOXBERRY", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-13 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "BOXBERRY", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "BOXBERRY", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "BOXBERRY", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "PonyExspress", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3265", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Отменен", "createdAt": "2021-06-01 22:55:20.913", "updatedAt": "2021-07-18 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
         { "_id": "60f8292fbdea140012a1e2c7", "shop_id": "3266", "moysklad_id": "4bd8c284-c313-11eb-0a80-0024001541f2", "summ": 5220.95, "status": "Новый", "createdAt": "2021-06-02 12:55:20.913", "updatedAt": "2021-07-19 15:02:32.117", "delivery": "shiptor", "trackNumber":"-", "loading": false},
      ],
      columns:[
         {
            // ПЕРЕИМЕНОВАН shop_id
            label: 'Номер заказа',
            field: 'shop_id',
            sortable: true,
            inputNumber:true,
            width: '140px'
         },

         {
            // ПЕРЕИМЕНОВАН  summ
            label: 'Размер наложенного платежа',
            field: 'summ',
            type: 'number',
            sortable: true,
            width: '140px',
            globalSearchDisabled: true,
            
         },

         {
            // НЕ ПЕРИМЕНОВАН
            label: 'Статус',
            field: 'status',
            type: 'text',
            sortable: true,
            width: '120px',
            tdClass: 'text-center',
            globalSearchDisabled: true,
            filterOptions: {
               enabled: true
            },
            inputStatus: true,
         },
         
         {
            // ПЕРЕИМЕНОВАН createdAt
            label: 'Дата',
            field: 'createdAt',
            type: 'date',
            dateInputFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
            dateOutputFormat: 'dd-MM-yyyy HH:mm:ss',
            sortable: true,
            globalSearchDisabled: true,
            inputDateCreated: true,
         },

         {
         //    // ПЕРЕИМЕНОВАН updatedAt
            label: 'Дата последнего изменения заказа',
            field: 'updatedAt',
            type: 'date',
            dateInputFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
            dateOutputFormat: 'dd-MM-yyyy HH:mm:ss',
            sortable: true,
            globalSearchDisabled: true,
            inputDateUpdated: true,
         },
        
         {
            // ПЕРЕИМЕНОВАН delivery
            label: 'Название ТК',
            field: 'delivery',
            type: 'text',
            sortable: true,
            width: '120px',
            globalSearchDisabled: true,
            inputDelivery: true,
         },
         {
            label: '',
            field: 'btn',
            html: true,
            sortable: false,
            globalSearchDisabled: true,
         },
      ],
   },

   actions: {
      createDelivery(context, selectedOrdersId) {
         console.log(selectedOrdersId);
      }
   },
   getters: {
      // Уникальные статусы из массива заказов 
      statusOptions(state) {
         return Array.from(new Set(state.ordersTEST.map(item => item.status)))
      },
      // Уникальные ТК из массива заказов 
      deliveryOptions(state) {
         return Array.from(new Set(state.ordersTEST.map(item => item.delivery)))
      }
   }
})

export default store;