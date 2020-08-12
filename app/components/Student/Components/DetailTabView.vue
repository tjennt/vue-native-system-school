<template>
    <!-- <Page> -->
        
        <!-- CHECK BUSY GET DATA -->
        <!-- <ActivityIndicator :busy="isBusy" /> -->
        
        <!-- IF NOT DATA -->
        <!-- <Label v-show="isData === false" class="page__content-notfound" text="Không có dữ liệu"></Label> -->

        <ScrollView ref="scrollView" v-show="isData">
            <ListView for="(newsD, index) in news" @itemTap="newsDetailM"
                style="height:1380px">
                <v-template>
                        <StackLayout class="card-news m-t-5" :class="index % 2 == 0 ? 'shadow-sec-wit': 'shadow-main-wit'">

                            <Label :text="newsD.name" class="label-title" textWrap="true" />
                            <Label :text="newsD.content" class="t-12"  textWrap="true"/>

                            <GridLayout rows="auto" columns="10*,auto">
                                <GridLayout row="0" column="1" columns="*, *">
                                    <Label col="0" text.decode="&#xf017;" class="nt-icon far"/>
                                    <Label col="1" text="20/03/2020" class="p-r-1"/>
                                </GridLayout>
                            </GridLayout>

                        </StackLayout>
                        <!-- <StackLayout class="hr"/> -->
                </v-template>
            </ListView>
        </ScrollView>

    <!-- </Page> -->
</template>

<script>
    import newsDetail from "./NewsDetail";
    export default {
        mounted() {
            // this.news = [];
        },
        data() {
            return {
                isBusy: false,
                isData: true,
                newsDetail: newsDetail,
                news: [{
                                name: "Thông báo về việc ngừng hỗ trợ sinh viên",
                                content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                                imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"
                            },
                            {
                                name: "Czech Republic",
                                content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                                imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"
                            },
                            {
                                name: "Germany",
                                content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                                imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
                            },
                            {
                                name: "Spain",
                                content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                                imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
                            },
                            {
                                name: "Ethiopia",
                                content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                                imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
                            }]
            }
        },
        methods: {
            newsDetailM(args) {
                this.$navigateTo(this.newsDetail, { 
                    fullscreen: true,  
                    props: { data: args.item }
                });
            }
        },
    }
</script>

<style lang="scss">
    .shadow-main-wit {
        padding: 2;
        background: linear-gradient(to top, rgba(6, 67, 124, 0.2), rgba(0,0,0, 0));
    }
    .shadow-sec-wit {
        padding: 2;
        background: linear-gradient(to top, rgba(2, 250, 23, 0.219), rgba(0,0,0, 0));
    }
</style>