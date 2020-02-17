import {mapState} from 'vuex';
import CountModel from '../../context/CountModel';

export default {
  name: 'container',
  components: {},
  props: [],
  data () {
    return {
      layout: 'grid',
      CountModel
      
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
    increaseLikes() {
      this.$context.events.notify('count.like');
    },
    increaseRetweets() {
      this.$context.events.notify('count.retweets');
    },
    increaseReplies() {
      this.$context.events.notify('count.replies');
    },
    undo() {
      if(this.$context.history.length) {
        this.$context.history.pop().undo();
      }
    }
  }
}


