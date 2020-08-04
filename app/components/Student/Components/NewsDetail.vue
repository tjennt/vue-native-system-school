<template>
     <Page class="bg-main">
      <ActionBar class="action-bar-news bg-main" :flat="isFlat">
        <NavigationButton v-show="!isFlat" text="" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>

        <Label :text="titleAction" class="hidden" ref="topTitle" fontSize="17" verticalAlignment="center" />
        <!-- <ActionItem @tap="someMethod" ios.systemIcon="13" ios.position="right" text="refresh" android.position="popup">
        </ActionItem> -->
		  </ActionBar>
      <ScrollView ref="scrollView" @scroll="onScroll()">
        <StackLayout class="container-news">
          <StackLayout class="header-news">
            <Label class="content-title" ref="title" :text="title" />
            <Label class="content-title-more" textWrap="true" ref="title" :text="'( ' + titleAction + ')'" />
          </StackLayout>
          <StackLayout class="content-news">
            <Label textWrap="true" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            class="description-label" />
            <Label textWrap="true" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            class="description-label" />
            <Label textWrap="true" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            class="description-label" />
          </StackLayout>
        </StackLayout>
		</ScrollView>
    </Page>

</template>

<script>
export default {
  props: ['news'],
  data() {
    return { 
      titleAction: "Đóng học phí học kì fall 2030",
      title: "Thông báo",
      isFlat: true
    };
  },
  methods: {
    onScroll() {
        let topTitle = this.$refs.topTitle.nativeView;
        let scrollView = this.$refs.scrollView.nativeView;
        let title = this.$refs.title.nativeView;
        scrollView.verticalOffset > 99
            ? (this.isFlat = false)
            : (this.isFlat = true);
        scrollView.verticalOffset > 89
            ? (topTitle.className = "visible")
            : (topTitle.className = "hidden");
        if (scrollView.verticalOffset < 0) {
            title.translateX = -(
                scrollView.verticalOffset -
                scrollView.verticalOffset / 1.05
            );
        }
    },
    someMethod() {
        console.log('refresh was tapped');
    }
  }
}
</script>


<style lang="scss">

.container-news{
    margin-top: 0;
}
.content-news {
    background-color: #fff;
    padding: 20;
    font-size: 20;
}

.action-bar-news {
    border-width: 0;
    margin-bottom: 0;
}

.action-bar-news Label {
    font-weight: bold;
    opacity: 0;
}

.header-news {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: -16;
    margin-right: -16;
    padding-top: 8;
    padding-bottom: 8;
    padding-left: 10;
    padding-right: 10;
    border-bottom-width: 1;
    border-bottom-color: rgba(0,0,0,.20);
    color: #ffffff;
}
.content-title {
  font-size: 36;
  font-weight: bold;
  margin-left: 20;
}
.content-title-more {
  font-size: 15;
  font-weight: bold;
  margin-left: 20;
}
.description-label {
    margin-bottom: 16;
    line-height: 3;
}

.hidden {
    animation-name: show;
    animation-duration: 0.2;
    animation-fill-mode: forwards;
    animation-direction: reverse;
}

.visible {
    animation-name: show;
    animation-duration: 0.2;
    animation-fill-mode: forwards;   
    color: #ffffff; 
}

@keyframes show {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}
</style> 