export default {
    methods: {
       requestGet: function (url) {
          console.log('request ' + url)
          return this.$http.get(url)
       },
       requestPost: function (url, data) {
        console.log('request ' + url)
        return this.$http.post(url)
     }
    }
 }