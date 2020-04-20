<template>
    <div class="container">
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="密码" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="isAgree" :rules="argeeRules">
      <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
    </mu-form-item>
    <mu-form-item>
      <mu-button color="primary" @click="submit">提交</mu-button>
      <mu-button @click="clear">重置</mu-button>
    </mu-form-item>
  </mu-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
      validateForm: {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
        //模拟后端接口数据
        let user = {
          userId: '2000100193',
          username: 'taoranran',
          userRole: 'admin',
          avatar: 'https://avatars1.githubusercontent.com/u/42235689?s=60&u=b25100f60b66465b78fe97e36b2788715c216a6d&v=4'
        }
        localStorage.setItem('token', 'EcIHTAWoGrmMVvTu2LPvuL-siq6hAfieVeehl-HTe_M')
        localStorage.setItem('user', JSON.stringify(user))
        // localStorage.setItem('menuList', JSON.stringify(this.menuList))
        this.$store.commit('setToken', 'EcIHTAWoGrmMVvTu2LPvuL-siq6hAfieVeehl-HTe_M')
        this.$store.commit('setUser', user)
        this.$store.commit('setMenuList', this.menuList)
        this.$router.push('/')
        this.openSimpleDialog()
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      };
    }
  }
};
</script>
<style>
.mu-demo-form {
  max-width: 600px;
  padding: 20px 20px;
  background-color: white;
  box-shadow: 1px 1px 5px 2px #eee;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>