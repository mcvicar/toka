<template>
  <amplify-authenticator username-alias="email">
    <amplify-sign-up
      slot="sign-up"
      username-alias="email"
      :form-fields.prop="formFields"
    ></amplify-sign-up>
    <amplify-sign-in slot="sign-in" username-alias="email"></amplify-sign-in>
  </amplify-authenticator>
</template>

<script>
export default {
  name: 'AuthWithSlots',
  data() {
    return {
      formFields: [
        {
          type: 'email',
          required: true,
        },
        {
          type: 'password',
          required: true,
        }
      ]
    }
  }
}
</script>
