<template>
    <Page class="schedule">
         <ActionBar class="action-bar">
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"/>
            
            <ActionItem icon="res://menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left"/>
            <Label class="action-bar-title" :text="title"/>
        </ActionBar>

        <!-- CONTENT -->
        <GridLayout rows="auto, auto" class="bg-fff">
            <ActivityIndicator :busy="isBusy" />
            <Label v-show="isData === false" class="page__content-notfound" text="Không có dữ liệu"></Label>

            <ScrollView ref="scrollView" v-show="isData">
                <ListView for="(date, index) in data1" style="height: 1600px">
                    <v-template>
                        <StackLayout class="card-news">
                          <!-- :class="index % 2 == 0 ? '': 'bg-center'" -->
                          <GridLayout rows="auto, auto" columns="auto, 10*, auto">
                            <Label row="0" column="0" :text="date.name" class="label-title bg-main date-of-week" textWrap="true" />
                            <StackLayout row="0" column="1">
                                <Label :text="date.nameSub" class="label-title" textWrap="true" />
                                <Label :text="'CA 3 | ' + date.date" textWrap="true" />
                            
                            </StackLayout>
                            <Label row="0" column="2" :text="'Giảng viên: ' + date.teacher" textWrap="true"/>
                            <!-- <Label rows="0" column="1" :text="date.date"/> -->
                          </GridLayout>
                        </StackLayout>
                    </v-template>
                </ListView>
            </ScrollView>
        </GridLayout>
    </Page>    
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Schedule")
        
            this.data1 = [
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 2',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 3',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 4',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 5',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 6',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 7',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
            {
                    nameSub: 'Javascript',
                    name: 'Thứ 2',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 3',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 4',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 5',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 6',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                },
                {
                    nameSub: 'Javascript',
                    name: 'Thứ 7',
                    date: '20-7-2020',
                    time: '7:00 - 9:30 AM',
                    teacher: 'LongNv'
                }
            ]
        },
        data() {
            return {
            title: "THỜI KHÓA BIỂU",
            isFlat: true,
            isBusy: false,
            isData: true,
            data1: []
            };
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer()
            },
        }
    }
</script>

<style scoped="scss">
  .bg-fff {
    background: #fff;
  }

  .date-of-week {
    border-radius: 10;
    padding: 15;
    color: #fff;
  }
</style>