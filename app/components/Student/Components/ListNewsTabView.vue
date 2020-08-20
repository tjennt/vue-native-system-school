<template>
    <TabView
        className="tab-view-home"
        :selectedIndex="selectedIndex"
        @selectedIndexChange="indexChange"
    >
        <TabViewItem v-for="(button, index) in data.buttons" :key="index" :title="button.text">
            <DetailTabView />
        </TabViewItem>

    </TabView>
</template>

<script>
import DetailTabView from "./DetailTabView";
export default {
    components: {
        DetailTabView
    },
    data() {
        return {
            selectedIndex: 0,
            data: {
                buttons: [
                    {text: 'Bảng tin', id: 1},
                    {text: 'Thông báo', id: 2},
                    {text: 'Tuyển sinh', id: 3}
                ]
            }
        }
    },
    methods: {
        indexChange: function(args) {
            let newIndex = args.value
            // console.log('Current tab index: ' + newIndex)
        }
    }
}
</script>

<style lang="scss">
    .tab-view-home {
        tab-text-color: #000000;
        selected-tab-text-color: #2a4054;
        android-selected-tab-highlight-color: #2a4054;
        border-radius: 10;
    }
</style>