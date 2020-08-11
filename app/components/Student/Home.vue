<template>
    <Page class="home-student">
        <!-- ACCTION BAR -->
        <ActionBar class="action-bar">
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"/>
            
            <ActionItem icon="res://menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left"/>
            <Label class="action-bar-title" :text="title"/>
        </ActionBar>

        <!-- CONTENT -->
        <!-- <ListNewsCustom /> -->
        <ListNewsTabView />
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";
    import ListNewsCustom from "./Components/ListNewsCustom";
    import ListNewsTabView from "./Components/ListNewsTabView";


    export default {
        components: {
            ListNewsTabView
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home")
        },
        data() {
            return {
                title: 'TRANG CHỦ HỌC SINH'
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer()
            }
        }
    }
</script>

<style lang="scss">
.categories-title {
    padding: 10;
    text-align: center;
    font-size: 20;
    font-weight: bold;
}
.selected-category {
    border-bottom-width: 5;
    border-color: #2a4054;
}
.card-news {
    border: 5 #000 solid;
}
.bg-center {
    background-color: rgba(42,64,84, 0.2);
}
.label-title {
    font-size: 20;
    font-weight: bold;
}
.float-right {
    float: right;
}
</style>