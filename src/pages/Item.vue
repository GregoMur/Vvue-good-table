<template>
    <div class="listCard">
        <router-link to="/">Вернуться к таблице</router-link>

        <h1>Карточка заказа № {{ $route.params.id.shop_id }} от {{ $route.params.id.createdAt }}</h1>
        <div class="info">
            <p>Номер заказа - {{ $route.params.id.shop_id }}</p>
            <p>Статус заказа - {{ $route.params.id.status }}</p>
            <p>Способ доставки - {{ $route.params.id.delivery }}</p>
            <!-- <p>Населенный пункт - {{ $route.params.id.locality }}</p> -->
            <p>Дата последнего изменения - {{ $route.params.id.updatedAt }}</p>
        </div>
        
        <hr>
        <p>Cтоимость - <strong>{{ $route.params.id.summ }}</strong></p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .listCard {
        border:10px solid #4c5c7a;
        border-radius: 10px;
        padding: 20px;
    }

    .listCard a {
        padding: 15px;
        text-decoration: none;
        color: black;
        font-size: 20px;
        border: 1px solid #4c5c7a;
        border-radius: 5px;
        background-color: #ffffff;
        transition-duration: .2s;
    }

    .listCard a:hover {
        color: white;
        background-color: #4c5c7a;
        transition-duration: .2s;
    }

</style>