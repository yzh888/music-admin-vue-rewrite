<template>
    <div class="container">
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="密码" prop="password" :rules="passwordRules" >
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
    </mu-form-item>
    <div>
    <mu-auto-complete label="提示输入内容" v-model="verifyCode"></mu-auto-complete>
    <mu-button color="info" @click="getVerify()" v-if="vailiable">获取验证码</mu-button>
    <img ref="image" alt="" v-if="!vailiable">
    </div>
    <mu-form-item prop="isAgree" :rules="argeeRules">
      <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
    </mu-form-item>
    <mu-form-item>
      <mu-button color="primary" @click="submit">提交</mu-button>
      <mu-button @click="clear">重置</mu-button>
    </mu-form-item>
  </mu-form>
  <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
    <div>
      <span>请选择你的角色</span>
      <p v-for="(item, index) in roles" :key="index" @click="goIndex(item)">
         <span>{{item.role_name}}</span>
      </p>
    </div>
    <mu-button slot="actions" flat color="primary">Close</mu-button>
  </mu-dialog>
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
      },
     verifyCode: '',
     vailiable: true,
     openSimple: false,
     roles : []
    }
  },
  created() {
  },

  watch: {
    //    password: function(){
    //    if(this.password.length >=6 && this.validateForm.username != null){
    //      this.getVerify()
    //    }
    //  }
  },

  methods: {

    //获取验证码
    getVerify(){
      this.vailiable = false
      this.axios({
                method: 'get',
                url: "http://localhost:8080/captcha",
                // 2、将请求数据转换为form-data格式
                params: {
                  name : this.validateForm.username
                },
                // 3、设置请求头Content-Type
               headers:{ 'Content-Type':'application/x-www-form-urlencoded' },
               responseType: 'blob',
            }).then(res => {
              let img = this.$refs.image
              let url = window.URL.createObjectURL(res.data)
              img.src=url
            })
    },
    //提交登录信息
    submit () {
      this.$refs.form.validate().then((result) => {
        //模拟后端接口数据
        this.axios({
          method: 'post',
          url: "http://localhost:8080/sysAdmin/login",
          data: {
             name:this.validateForm.username,
             password: this.validateForm.password,
             verifyCode: this.verifyCode
          }
        }).then(res => {
        localStorage.setItem('token', res.data.data)
        this.$store.commit('setToken', res.data.data)
        this.getRole(res.data.data)

        })
        // localStorage.setItem('user', JSON.stringify(user))
        // localStorage.setItem('menuList', JSON.stringify(this.menuList))
        
        // this.$store.commit('setUser', user)
        // this.$store.commit('setMenuList', this.menuList)
      });
    },

    //获取用户角色
    getRole(token){
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/sysAdmin/menu',
        params: {
                  name : this.validateForm.username
                },
                // 3、设置请求头Content-Type
        headers:{ 
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization': token
          },
      }).then(res => {
        this.roles = res.data.data
        if(this.roles.length > 1){
          this.openSimple = true
        }
      })
    },

    //进入主页
    goIndex(item){
      console.log("参数" + item.name)
      console.log(this.validateForm.username)
      this.$router.push({name:'layout', 
                      query: {
                        name: item.name,
                        roleId: item.role_id
                        }
                      })
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