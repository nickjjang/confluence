<template>
  <Container>
    <Wrapper>
      <h2>Summary</h2>
      <h3>{{ $route.query.name }}</h3>
      <p id="name">Name: {{ $route.query.name }}</p>
      <p id="age">Age: {{ $route.query.age }}</p>
      <p id="country">Where do you live: {{ $route.query.country }}</p>
      <p id="package">Package: {{ $route.query.packageName }}</p>
      <h3 id="premium">Your premium is: {{ premium }}</h3>
      <div class="form-actions">
        <button class="outlined" @click="handleBack" id="back">Back</button>
        <button @click="handleBuy" id="buy">Buy</button>
      </div>
    </Wrapper>
  </Container>
</template>

<script>
import { calculatePremium, curriencies, packages } from "../constants";
export default {
  data() {
    return {
      age: "",
      name: "",
      packageName: "",
      country: "",
    };
  },
  beforeMount() {
    const { query } = this.$route;
    if (!query) {
      return navigateTo("/error");
    }
    let age = parseInt(query.age, 10);
    age = isNaN(age) ? 0 : age;
    const currency = curriencies.find(
      (currency) => currency.country === query.country
    );
    const packageItem = packages.find(
      (item) => item.name === query.packageName
    );

    if (age <= 0 || age > 100 || !currency || !packageItem) {
      return navigateTo("/error");
    }
  },
  computed: {
    premium() {
      let age = parseInt(this.$route.query.age, 10);
      age = isNaN(age) ? 0 : age;
      return calculatePremium(
        age,
        this.$route.query.country,
        this.$route.query.packageName
      );
    },
  },
  methods: {
    handleBack() {
      navigateTo({
        path: "/input",
        query: this.$route.query,
      });
    },
    handleBuy() {
      navigateTo("/");
    },
  },
};
</script>

<style scoped lang="scss">
.group {
  flex-direction: column;
  text-align: left;
  display: flex;
  align-items: center;
}

.form-field {
  width: 240px;
}

.form-actions {
  button {
    margin: 0 10px;
  }
}

.form-radio-field {
  font-size: 14px;
  width: 225px;
}
</style>
