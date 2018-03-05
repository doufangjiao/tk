<template>
<div>
    <div id="reg-header">
        <div class="reg-header-min">
            <img src="../../assets/images/mine/back_h.png" alt="" class="reg-goback">
            <span>会员注册</span>
        </div>
    </div>
</div>

</template>

<script>
export default {
  data () {
    return {

    }
  },
   mounted:function(){
     $(".reg-goback").click(function () {
         history.back();
     })
   }
}
</script>

<style lang="css" scoped>

</style>
