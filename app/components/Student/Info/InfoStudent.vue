<template>
    <Page class="info-user">
        <ActionBar class="action-bar">
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"/>
            
            <ActionItem icon="res://menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left"/>
            <Label class="action-bar-title" :text="title"/>
        </ActionBar>
        
        <StackLayout class="p-t-5">
            <GridLayout rows="auto, auto" columns="auto, auto">
                
                <!-- AVATAR STUDENT -->
                <Image row="0" col="0" class="nt-drawer__header-image border-image-user" src="~/assets/image-app.jpg"/>
                
                <!-- INFO STUDENT -->
                <GridLayout row="0" col="1" rows="*, *" columns="*, *">
                    <GridLayout row="0" columns="auto, *">
                        <Label col="0" text.decode="&#xf007;" class="nt-icon m-t-5 far"/>
                        <Label col="1" class="label-text" text=" Nguyễn Tấn Tiền"></Label>
                    </GridLayout>
                    <GridLayout row="1" columns="auto, *">
                        <Label col="0" text.decode="&#xf549;" class="nt-icon m-t-5 fas"/>
                        <Label col="1" class="label-text" text="  WD14301"></Label>
                    </GridLayout>

                </GridLayout>
            </GridLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";
    
    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("InfoStudent")
        },
        data() {
            return {
                title: 'THÔNG TIN SINH VIÊN'
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer()
            },
        }
    }
</script>

<style lang="scss">
    .border-image-user {
        border-width:2;
        border-color: #2a4054;
        text-align: center;
    }
    .label-text {
        font-size: 17;
    }
</style>