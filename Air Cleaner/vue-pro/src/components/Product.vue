<template>
<div class="list">
	<ul>
		<li>
			<img src="../assets/images/0.jpg"/>
			<p class="bt1">Ajshdeer</p>
			<p class="bt2">￥154.00</p>
		</li>
	</ul>
	<ul>
		<li>
			<img src="../assets/images/1.jpg"/>
			<p class="bt1">SHKLHFKOF</p>
			<p class="bt2">￥123.00</p>
		</li>
	</ul>
	<ul>
		<li>
			<img src="../assets/images/2.jpg"/>
			<p class="bt1">SYUAIOH</p>
			<p class="bt2">￥999.00</p>
		</li>
	</ul>
	<ul>
		<li>
			<img src="../assets/images/3.png"/>
			<p class="bt1">小米AHH</p>
			<p class="bt2">￥999.00</p>
		</li>
	</ul>
	<ul>
		<li>
			<img src="../assets/images/4.png"/>
			<p class="bt1">三星AOO</p>
			<p class="bt2">￥888.00</p>
		</li>
	</ul>
	<ul>
		<li>
			<img src="../assets/images/5.png"/>
			<p class="bt1">DHODIDD</p>
			<p class="bt2">￥1799.00</p>
		</li>
	</ul>
	<ul>
		<li>
			<img src="../assets/images/6.png"/>
			<p class="bt1">华为AJDJKL</p>
			<p class="bt2">￥1399.00</p>
		</li>
	</ul>
	<ul>
		<li>
			<img src="../assets/images/7.png"/>
			<p class="bt1">小米Aoodsh</p>
			<p class="bt2">￥1199.00</p>
		</li>
	</ul>
	<ul>
		<li>
			<img src="../assets/images/8.png"/>
			<p class="bt1">飞利浦AJpro</p>
			<p class="bt2">￥1288.00</p>
		</li>
	</ul>
</div>
</template>

<script>
</script>

<style>
	.list{
		display: flex;
		flex-wrap: wrap;
		width:63%;
		margin:0 auto;
		justify-content: space-around;
	}
	.list>ul{
		padding-top:18px ;
		margin-top:15px;
		width: 260px;
		height: 180px;
		overflow: hidden;
		text-align: center;
		background: #42b9880a;
	}
	.list>ul>li>img{
		width:200px;
		height:120px ;
	}
	.bt1{
		font-size: 16px;
	}
	.bt2{
		font-size: 14px;
		color:red;
	}
</style>