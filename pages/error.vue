<template>
  <Container>
    <Wrapper>
      <h2>Oops</h2>
      <p>
        Your age is over our accepted limit. <br />
        We are sorry but we cannot insure you now
      </p>
      <p><button @click="handleClick" id="ok">Ok :(</button></p>
    </Wrapper>
  </Container>
</template>

<script>
export default {
  methods: {
    handleClick() {
      navigateTo("/");
    },
  },
};
</script>
