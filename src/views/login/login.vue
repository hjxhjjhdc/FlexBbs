<template>
  <div style="position: relative; width: 100%; height: 100%">
    <a-card class="card">
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="UserName:" name="username" required>
          <a-input v-model:value="formState.username" @keyup.enter="onSubmit" />
        </a-form-item>
        <a-form-item label="PassWord:" name="password" required>
          <a-input-password
            v-model:value="formState.password"
            @keyup.enter="onSubmit"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 4 }">
          <a-button
            type="primary"
            :loading="iconLoading"
            @click="onSubmit"
            shape="round"
          >
            Create</a-button
          >
          <a-button style="margin-left: 10px" @click="resetForm" shape="round"
            >Reset</a-button
          >
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, toRaw } from "vue";
import type { UnwrapRef } from "vue";
import { userloginMock } from "@/api/api";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

interface FormState {
  username: string;
  password: string;
}
interface DelayLoading {
  delay: number;
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      username: "",
      password: "",
    });
    const rules = {
      username: [
        {
          required: true,
          message: "Please input UserName",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "Please input PassWord",
          trigger: "blur",
        },
      ],
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          let params: any = {
            username: formState.username,
            password: formState.password,
          };
          iconLoading.value = { delay: 500 };
          setTimeout(() => {
            iconLoading.value = false;
            //接口
            userloginMock(params)
              .then((res: any) => {
                console.log(res);
                let { code,message } = res.data;
                if (code == 200) {
                  // alert('success')
                  message.success("登录成功");
                  router.push("HomePage");
                } else {
                  message.error(`${message}`);
                }
                formRef.value.resetFields();
              })
              .catch((_: any) => {
                console.log(_);
                formRef.value.resetFields();
              });
          }, 2000);
          //   console.log("values", formState, toRaw(formState));
        })
        .catch((error: any) => {
          console.log("error", error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };

    const iconLoading = ref<boolean | DelayLoading>(false);
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      formState,
      rules,
      onSubmit,
      resetForm,
      loading: ref(false),
      iconLoading,
    };
  },
});
</script>

<style lang="less" scoped>
.card {
  width: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 20px;
}
</style>