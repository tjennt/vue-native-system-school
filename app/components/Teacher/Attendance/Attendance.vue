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
        <GridLayout rows="auto,auto, auto">
            <!-- <GridLayout row="0" columns="*,*,*">
                <Button v-for="(button, index) in data.buttons" 
                    :key="index" 
                    @tap="getdataInfo(button.id)"
                    :column="index"
                    :text="button.text"
                ></Button>
            </GridLayout> -->
            <Label row="0" class="text-title" text="Lớp: WD14301">
            </Label>
            <StackLayout row="1" class="hr" />
            <StackLayout row="2">
                <ActivityIndicator :busy="isBusy" />
                <Label v-show="isData === false" class="page__content-notfound" text="Không có dữ liệu"></Label>

                <ScrollView v-show="isData">
                    <ListView for="newsD in data.news"
                        style="height:1200px">
                        <v-template>
                            <FlexboxLayout flexDirection="row">
                                <Image :src="newsD.imageSrc" class="thumb img-circle" />
                                <Label :text="newsD.name" class="t-12"
                                    style="width: 60%" />
                                <Button text="Tap"></Button>
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                </ScrollView>

            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../../../shared/selected-page-service";
    // import NewsDetail from './Components/NewsDetail';
export default {
    mounted() {
        this.data.news = [
                    {
                        name: "China",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"
                    },
                    {
                        name: "Czech Republic",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"
                    },
                    {
                        name: "Germany",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
                    },
                    {
                        name: "Spain",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
                    },
                    {
                        name: "Ethiopia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
                    },
                    {
                        name: "Croatia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png"
                    },
                    {
                        name: "Hungary",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png"
                    },
                    {
                        name: "Italy",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png"
                    },
                    {
                        name: "Jamaica",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png"
                    },
                    {
                        name: "Romania",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png"
                    },
                    {
                        name: "Russia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png"
                    },
                    {
                        name: "United States",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png"
                    }
                ];
    },
    data() {
        return {
            title: 'Điểm danh',
            isBusy: true,
            // newsDetail: NewsDetail,
            data: {
                buttons: [
                    {text: 'Bảng tin', id: 1},
                    {text: 'Thông báo', id: 2},
                    {text: 'Tuyển sinh', id: 3}
                ],
                news: []
            },
            isData: true
        }
    },
    computed: {
         
    },
    methods: {
        onDrawerButtonTap() {
            utils.showDrawer();
            // console.log(utils)
        },
    }
}
</script>

<style lang="scss">
</style>