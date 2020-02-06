const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'long', week: 'long', dat: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric'
});
Vue.filter('datetime', function(value, pattern){
    if(!value) return '';
    return formatter.format(value);
});