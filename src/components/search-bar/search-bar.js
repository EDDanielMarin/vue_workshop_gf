
export default {
  name: 'search-bar',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    searchData()
    {
      this.$store.dispatch('example/search')

    }

  }
}


