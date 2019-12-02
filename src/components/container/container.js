import {mapState} from 'vuex';

export default {
  name: 'container',
  components: {},
  props: [],
  data () {
    return {
      layout: 'grid',
    }
  },
  computed: {
    ...mapState('example', ['data']),
    ...mapState('example', ['isLoading']),
    ...mapState('example', ['isLoaded']),
    ...mapState('example', ['error']),

  },
  mounted () {

  },
  methods: {

  }
}


