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
        <Label text="HOME STUDENT"></Label>
        
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home")    
        },
        data() {
            return {
                title: 'TRANG CHỦ GIÁO VIÊN'
            }
        },
        computed: {
            
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer()
            },
        }
    }
</script>

<style lang="scss">
</style>