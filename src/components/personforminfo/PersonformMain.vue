<template>
	<section class="personforminfo-main">
		<ul class="insure-type">
			<li class="quik-insure">快速投保</li>
		</ul>
		<form class="form-content">
			<div class="name">
				<label>姓名</label>
				<input type="text" placeholder="请输入投保人姓名" />
			</div>
			<div class="id-card">
				<select class="id-type">
					<option>身份证</option>
					<option>护照</option>
					<option>军人证</option>
					<option>港澳台同胞证</option>
				</select>
				<i></i>
				<input type="text" placeholder="请输入证件号码" />
			</div>
			<div class="phone-num">
				<label>手机号</label>
				<input type="text" placeholder="请填写投保人手机号码" />
			</div>
			<div class="e-mail">
				<label>电子邮箱</label>
				<input type="text" placeholder="请填写投保人电子邮箱" />
			</div>
			<div class="area">
				<label>投保地区</label>
				<div class="slide-wapper">
				  <div class="slide-item">
				    <input type="text" class="select-value" value="北京市 北京市">
				    <i></i>
				  </div>
				</div>
			</div>
			<div class="job">
				<label>职业</label>
				<i></i>
				<input type="text"readonly="readonly" placeholder="请选择职业" />
			</div>
		</form>
		<div class="insRelation">
			<div class="insRelation-tit">
				<h3>被保险人是投保人</h3>
				<div class="sel-who">
					<span class="me active">本人<i></i></span>
					<span class="lover">配偶<i></i></span>
					<span class="parent">父母<i></i></span>
				</div>
			</div>
			
			<form class="not-mine-form">
				<div class="name">
					<label>姓名</label>
					<input type="text" placeholder="请输入投保人姓名" />
				</div>
				<div class="id-card">
					<select class="id-type">
						<option>身份证</option>
						<option>护照</option>
						<option>军人证</option>
						<option>港澳台同胞证</option>
					</select>
					<i></i>
					<input type="text" placeholder="请输入证件号码" />
				</div>
				<div class="job">
					<label>职业</label>
					<i></i>
					<input type="text"readonly="readonly" placeholder="请选择职业" />
				</div>
			</form>
		</div>
		<div class="favoree">
			<span class="favoree-question">受益人</span>
			<i></i>
			<span class="legal">法定</span>
		</div>
		<p class="statement">
			<i class="read"></i>
			<span>我已阅读并认可</span>
			重要声明
		</p>
		<div class="buyit">
			<button class="checked">
				确认无误，购买
			</button>
		</div>
		
	</section>
</template>

<script>
export default {

  name: 'PersonformMain',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>