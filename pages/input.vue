<template>
  <Container>
    <Wrapper>
      <h2>Tell us about yourself</h2>
      <div class="group">
        <div class="form-field">
          <label for="name">Name</label>
          <input
            class="form-control"
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            v-model="name"
          />
        </div>
        <div class="form-field">
          <label for="age">Age</label>
          <input
            class="form-control"
            type="text"
            placeholder="Age"
            id="age"
            name="age"
            v-model="age"
          />
        </div>
        <div class="form-field">
          <label for="country">Where do you live</label>
          <select
            class="form-control"
            v-model="country"
            id="country"
            name="country"
          >
            <option v-for="(item, index) in countries" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
        <div class="form-radio-field" v-for="(item, index) in packages">
          <input
            type="radio"
            name="package"
            :id="`package_${index}`"
            :value="item.name"
            v-model="packageName"
          />
          <label :for="`package_${index}`">
            {{ item.name }}{{ packageDescription(item) }}
          </label>
        </div>
      </div>
      <h3 id="premium">Your premium is: {{ premium }}</h3>
      <div class="form-actions">
        <button class="outlined" @click="handleBack" id="back">Back</button>
        <button @click="handleNext" id="next">Next</button>
      </div>
    </Wrapper>
  </Container>
</template>

<script>
import {
  calculatePremium,
  countries,
  curriencies,
  packages,
} from "../constants";
export default {
  data() {
    return {
      countries,
      curriencies,
      packages,
      age: "",
      name: "",
      packageName: packages[0].name,
      country: countries[0],
    };
  },
  beforeMount() {
    const { query } = this.$route;
    this.age = query.age ? query.age : "";
    this.name = query.name ? query.name : "";
    this.country = query.country ? query.country : countries[0];
    this.packageName = query.packageName ? query.packageName : packages[0].name;
  },
  computed: {
    currency() {
      return curriencies.find((currency) => currency.country === this.country);
    },
    package() {
      return packages.find((item) => item.name === this.packageName);
    },
    premium() {
      let age = parseInt(this.age, 10);
      age = isNaN(age) ? 0 : age;
      return calculatePremium(age, this.country, this.packageName);
    },
  },
  methods: {
    handleBack() {
      navigateTo("/");
    },
    packageDescription(item) {
      if (item.plus === 0) {
        return "";
      }
      let age = parseInt(this.age, 10);
      age = isNaN(age) ? 0 : age;
      if (age <= 0 || age > 100) {
        return ` (${item.plus}%)`;
      }
      const pricePlus = (this.currency.rate * 10 * age * item.plus) / 100;
      return ` (+${pricePlus}${this.currency.code}, ${item.plus}%)`;
    },
    handleNext() {
      let age = parseInt(this.age, 10);
      age = isNaN(age) ? 0 : age;
      if (age <= 0 || age > 100) {
        return navigateTo("/error");
      }
      navigateTo({
        path: "/summary",
        query: {
          name: this.name,
          age: this.age,
          country: this.country,
          packageName: this.packageName,
        },
      });
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
