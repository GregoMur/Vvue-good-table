<template>
    <div :class="{sideBarMenuExpanded:isExpanded, sideBarMenuCollapsed:!isExpanded}">    
        <router-link to="/" tag="div" class="iconTextDiv">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                </span>
                <span class="textForIcon" v-show="isExpanded">Заказы</span>
        </router-link>

        <router-link to="/Zabor" tag="div" class="iconTextDiv">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </span>
                <span class="textForIcon" v-show="isExpanded">Доставка</span>
        </router-link>
           
        <div @click="expandCollapse" class="button">
            <svg v-if="!isExpanded" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
            <svg v-if="isExpanded" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            // Side bar menu равзернуто
            isExpanded: false
        }
    },
    methods: {
        // Развернуть, свернуть side bar menu
        expandCollapse() {
            this.isExpanded = !this.isExpanded;
        },
    }
}
</script>

<style>
    .sideBarMenuCollapsed, .sideBarMenuExpanded {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .sideBarMenuCollapsed, .sideBarMenuExpanded, .sideBarMenuExpanded .iconTextDiv, .sideBarMenuExpanded .iconTextDiv:hover {
        transition-duration: 0.5s;
    }
    .sideBarMenuCollapsed svg, .sideBarMenuExpanded svg, button, .iconTextDiv {
        cursor: pointer;
    }
    .sideBarMenuCollapsed,.sideBarMenuExpanded {
        background-color: rgb(76 127 229);
    }
    .sideBarMenuCollapsed {
         width: 70px;
    }
    .sideBarMenuExpanded {
        width: 200px;
    }
    .sideBarMenuCollapsed svg, .sideBarMenuExpanded svg, .textForIcon {
       color: rgb(223, 229, 238);
    }
    .textForIcon {
        margin-left: 10px;
        text-decoration: none;
    }
    .iconTextDiv, .button {
        display: flex;
        padding: 10px;
        align-items: center;
    }
    .iconTextDiv { 
        text-transform: uppercase;
        font-size: 18px;
    }
    .sideBarMenuExpanded .iconTextDiv:hover {
        transform: translateX(20px);
    }
</style>