<template>
  <span>
    <input type="checkbox" :id="id" v-model="checkbox"/>
    <label :for="id" data-on-label="On" data-off-label="Off"></label>
  </span>
</template>
<script>
export default {
  name: 'TimeLineSearch',
  props:{
    id:{
      type:String,
      require:true,
      default:''
    },
  },
  data() {
    return {
      checkbox: true
    };
  },
  watch: {
    checkbox(checkStatus) {
      this.$emit('changeChecked', {id: this.id, checkStatus: checkStatus} );
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
	display: none;
}
input+label,
input+label::before,
input+label::after {
	-webkit-transition: all .2s;
	transition: all .2s;
}
input+label {
	display: inline-block;
	position: relative;
	width: 50px;
	height: 24px;
	border-radius: 12px;
	cursor: pointer;
}
input+label::before {
	display: block;
	content: attr(data-off-label);
	position: absolute;
	top: 7px;
	right: 3.5px;
	color: #fff;
	font-family: Arial, sans-serif;
	font-size: 9px;
}
input+label::after {
	content: '';
	position: absolute;
  top: 2px;
	left: 2px;
	width: 20px;
	height: 20px;
	background-color: #fff;
	border-radius: 50%;
}
input:checked+label::before {
	content: attr(data-on-label);
	left: 3.5px;
	right: auto;
	color: #fff;
}
input:checked+label::after {
	left: 27px;
	background-color: #f7f7f7;
}

input+label {
	background-color: #e74c3c;
}
input+label::before {
	color: #aaa;
}
input:checked+label {
	background-color: #1abc9c;
}
input:checked+label::before {
	color: #fff;
}
</style>
