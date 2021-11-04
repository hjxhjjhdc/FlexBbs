<template>
  <a-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item ref="name" label="UserName" name="username">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="PassWord" name="password">
      <a-input v-model:value="formState.password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, toRaw } from "vue";
import type { UnwrapRef } from "vue";

interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  setup() {
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
        { min: 6, max: 12, message: "Length should be 6 to 12", trigger: "blur" },
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
          console.log("values", formState, toRaw(formState));
        })
        .catch((error: any) => {
          console.log("error", error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>

<style>
</style>