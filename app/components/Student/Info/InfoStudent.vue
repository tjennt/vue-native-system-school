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
        
        <ScrollView>
            <StackLayout class="p-t-5">
                <GridLayout rows="auto, auto" columns="*">
                    
                    <!-- AVATAR STUDENT -->
                    <Image row="0" col="0" class="border-image-user" src="~/assets/images/anhthe.jpg"/>
                    
                    <!-- INFO STUDENT -->
                    <GridLayout class="ml-info" row="1" col="0" rows="*, *, *, *, *, *, *" columns="*">

                        <GridLayout class="info-grid" row="0" columns="auto, *">
                            <Label col="0" text.decode="&#xf007;" class="label-icon nt-icon m-t-5 far"/>
                            <Label col="1" class="label-text" text="  Trần Thị Thế Linh"></Label>
                        </GridLayout>

                        <GridLayout class="info-grid" row="1" columns="auto, *">
                            <Label col="0" text.decode="&#xf50c;" class="nt-icon m-t-5 fab"/>
                            <Label col="1" class="label-text" text="  PS09110"></Label>
                        </GridLayout>
                        
                        <GridLayout class="info-grid" row="2" columns="auto, *">
                            <Label col="0" text.decode="&#xf658;" class="nt-icon m-t-5 fas"/>
                            <Label col="1" class="label-text" text="  tienntps09110@fpt.edu.vn"></Label>
                        </GridLayout>
                        
                        <GridLayout class="info-grid" row="3" columns="auto, *">
                            <Label col="0" text.decode="&#xf095;" class="nt-icon m-t-5 fas"/>
                            <Label col="1" class="label-text" text="  090-231-8374"></Label>
                        </GridLayout>

                        <GridLayout class="info-grid" row="4" columns="auto, auto, *">
                            <Label col="0" text.decode="&#xf52b;" class="nt-icon m-t-5 fas"/>
                            <Label col="1" class="label-text" text="  Lớp             :"></Label>
                            <Label col="2" class="label-text" text="  WD14301"></Label>
                        </GridLayout>

                        <GridLayout class="info-grid" row="5" columns="auto, auto, *">
                            <Label col="0" text.decode="&#xf5a2;" class="nt-icon m-t-5 fas"/>
                            <Label col="1" class="label-text" text="  Niên học     :"></Label>
                            <Label col="2" class="label-text" text="  2018 - 2020"></Label>
                        </GridLayout>

                        <GridLayout class="info-grid" row="6" columns="auto, auto, auto">
                            <Label col="0" text.decode="&#xf21e;" class="nt-icon m-t-5 fas"/>
                            <Label col="1" class="label-text" text="  Trạng thái   :  "></Label>
                            <Label col="2" class="label-alert" text="  Đang học  "></Label>
                        </GridLayout>
                        
                        <GridLayout class="info-grid-button" row="7" columns="auto">
                            <Button col="0" text="THỐNG KÊ" class="btn btn-primary" @tap="goComponent(StatisticSubjectStudied)"></Button>
                            <!-- <Button col="1" text="Lịch học" class="btn btn-primary"></Button>
                            <Button col="2" text="Điểm danh" class="btn btn-primary"></Button> -->
    
                        </GridLayout>
                    </GridLayout>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";
    import StatisticSubjectStudied from "./StatisticSubjectStudied";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("InfoStudent")
        },
        data() {
            return {
                title: 'THÔNG TIN SINH VIÊN',
                StatisticSubjectStudied: StatisticSubjectStudied
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer()
            },
            goComponent(component){
                this.$showModal(component, {
                    fullscreen: true
                })
            }
        }
    }
</script>

<style lang="scss">
    .border-image-user {
        width: 130;
        border-color: #2a4054;
        text-align: center;
        padding: 2;
        background: linear-gradient(to left, rgba(42,64,84, .5), rgba(0,0,0, 0));
    }
    .label-icon {
        font-size: 25;
    }
    .label-text {
        font-size: 22;
    }
    .label-alert {
        font-size: 17;
        color: #ffffff;
        background: #00B894;
        border-width: 1 ;
        border-color: #2a4054;
        border-radius: 30;
    }
    .info-grid {
        padding: 5 0 5 0;
        color: #2a4054;
    }
    .info-grid-button {
        // margin-left: 0;
        padding: 40 0 0 0;
        color: #2a4054;
    }
    .ml-info {
        margin-top: 22;
        margin-left: 40;
    }
</style>