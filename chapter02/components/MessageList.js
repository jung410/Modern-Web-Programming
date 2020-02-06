import MessageListItem from './MessageListItem.js'
import lifecycleLoggerMixin from '../mixins/lifecycle-logger.mixin.js';
export default{
    name: 'MessageList',
    mixins: [lifecycleLoggerMixin],
    template: `<ul><message-list-item v-for="item in items" :item="item" :key="item.id"
        @delete="deleteMessage(item)"></message-list-item></ul>`,
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods :{
        deleteMessage(message){
            this.$emit('delete', message);
        }
    },
    components:{
        MessageListItem
    }
};