<template>
     <Page class="bg-main bg-fff">
      <ActionBar class="bg-main" :flat="true">
        <NavigationButton text="" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>

        <Label :text="title" ref="topTitle" fontSize="17" verticalAlignment="center" />
        <!-- <ActionItem @tap="someMethod" ios.systemIcon="13" ios.position="right" text="refresh" android.position="popup">
        </ActionItem> -->
		  </ActionBar>

        <!-- CONTENT -->
        <ActivityIndicator :busy="isBusy" />
        <Label v-show="isData === false" class="page__content-notfound" text="Không có dữ liệu"></Label>

        <ListView v-show="isData" for="(date, index) in data1" @itemTap="getDetail">
            <v-template>
                <StackLayout class="card-news">
                  <GridLayout rows="auto, auto" columns="auto, 10*, auto">
                    <Label row="0" column="0" :text="date.name" class="label-title bg-main date-of-week" textWrap="true" />
                    <Label row="0" column="1" :text="' | ' + date.date" class="label-title" textWrap="true" />
                    <Label row="0" column="2" :text="'Giảng viên: ' + date.teacher" textWrap="true"/>
                  </GridLayout>
                </StackLayout>
            </v-template>
        </ListView>
    </Page>

</template>

<script>
export default {
  props: ['data'],
  mounted() {
    
    this.data1 = [
      {
        name: 'Thứ 2',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 3',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 4',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 5',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 6',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 7',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 2',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 3',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 4',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 5',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 6',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      },
      {
        name: 'Thứ 7',
        date: '20-7-2020',
        time: '7:00 - 9:30 AM',
        teacher: 'LongNv'
      }
    ]
  },
  data() {
    return {
      title: "JAVASCRIPT - P405 - CA 1",
      isFlat: true,
      isBusy: false,
      isData: true,
      data1: []
    };
  },
  methods: {

  }
}
</script>


<style lang="scss">
  .bg-fff {
    background: #fff;
  }

  .date-of-week {
    border-radius: 10;
    padding: 15;
    color: #fff;
  }
</style> 