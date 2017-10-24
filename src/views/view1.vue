<template>
  <div class="">
    <h1>我是view1</h1>
    <a>我是view1</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'view1',
  mounted: function() {
        axios.post('http://yzrd.hangsheng.com.cn:8888/hsae-application/api/integral/integralRule')
            .then(function (response) {
                console.log(response.data.datas.details);
            })
            .catch(function (response) {
                console.log(response);
            });
    }
}
</script>

<style lang="css">
</style>
