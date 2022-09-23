<template>
  <Container>
    <Wrapper>
      <h2>Hello There!</h2>
      <p><button @click="handleClick" id="start">Start</button></p>
      <p>let's buy some insurance. It is going to take only few steps</p>
    </Wrapper>
  </Container>
</template>

<script>
export default {
  methods: {
    handleClick() {
      navigateTo("/input");
    },
  },
};
</script>
