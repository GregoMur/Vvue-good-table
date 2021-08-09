<template>
  <div class="app">
      <!-- Первой загружается таблица -->
      <!-- При нажатии на кнопку "Просмотр" в контестным меню, переходим на страницу "List", в которой отображаются сведения по конркреьному заказу -->
      <side-bar-menu></side-bar-menu>
      <router-view class="view"></router-view>    
  </div> 
</template>

<script>
import sideBarMenu from './components/sideBarMenu.vue'
export default {
  name: 'App',
  components: {
    sideBarMenu
  },
}
</script>
<style>
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    display: flex;
  }
  .view {
    flex-grow: 1;
  }
</style>