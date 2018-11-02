<template>
    <el-form  label-position="left" label-width="0px" class="login-container">
    <span class="tool-bar">
    </span>
        <h2 class="title" style="padding-left:22px;" >系统登录</h2>
        <el-form-item >
            <el-input type="text"  auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item >
            <el-input type="password"  auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
            <el-button type="primary" style="width:48%;" @click.native.prevent="login" >登 录</el-button>
        </el-form-item>
    </el-form>

</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="scss" scoped>
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 150px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .title {
            margin: 0px auto 40px auto;
            text-align: center;
            color: #505458;
        }
        .remember {
            margin: 0px 0px 35px 0px;
        }
    }
</style>