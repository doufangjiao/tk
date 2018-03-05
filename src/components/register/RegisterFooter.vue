<template>
	<div>
        <div id="reg-agree">
            <b class="reg-ag"></b>
            <p>我已经同意阅读&nbsp;<a href="javascript:;">泰康在线服务协议</a></p>
        </div>
        <div id="reg-select">
             <div class="register-l">
                  <router-link to="/login">登录</router-link>
             </div>
             <div class="register-l">
                  <router-link to="/register">注册</router-link>
             </div>
        </div>
        <div id="reg-footer">
            <ul>
                <li>关于泰康</li>
                <li>安全和保险</li>
                <li class="th">联系我们</li>
            </ul>
            <p>泰康在线保险股份有限公司版权所有</p>
            <p>京IP备09073454号-19</p>
        </div>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }

}
</script>

<style lang="css" scoped>
#reg-select>div{
        display: inline-block;
        font-size: 0.25rem;
        color:blue;
        margin-left: 0.3rem;
	}
</style>
