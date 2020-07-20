<template>
  <Page actionBarHidden="true" backgroundColor="red">
    <!-- <Label text="hjrhe"> -->
      <GridLayout columns="*,*,*">
        <Button column="0" @tap="goNav(Home)">Home</Button>
        <Button column="1" @tap="goNav(Browse)">Browse</Button>
        <Button column="2" @tap="goNav(Search)">Search</Button>

      </GridLayout>
  </Page>
</template>
<script>
    import Home from "./Home";
    import Browse from "./Browse";
    import Search from "./Search";

export default {
  components: {
      Home,
      Browse,
      Search
  },
  data() {
    return {
      Home: Home,
      Browse: Browse,
      Search: Search
    }
  },
  methods: {
    goNav(component) {
      this.$navigateTo(component, { clearHistory: true });
    }
  }  
}
</script>
