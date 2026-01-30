<template>
  <div class="container">
    <div class="column">
      <div class="me">
        <img src="@/assets/logo.png" />
        <h2>Mateusz Słotwiński</h2>
      </div>
    </div>
    <nav>
      <router-link to="/">Blog</router-link>
      <router-link to="/cv">CV</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $dark;
}

h2 {
  font-size: calc(17px + 1.7vw);
  font-weight: 500;
  margin: 0;
  font-family: 'One';
}

h3 {
  font-size: calc(8px + 0.8vw);
  font-weight: 500;
  margin: 0;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.container {
  margin: 20px;
  display: flex;
  align-items: center;

  position: fixed;
  top: 20px;
  left: 20px;
  border: 0;
  background: $dark;
  border-radius: 15px;
  z-index: 10;

  justify-content: space-evenly;
  border: 0px solid $dark;
  color: $light;
  width: calc(100vw - 40px);
  height: 75px;
  top: 0px;
  left: 0px;
  h2 {
    font-size: calc(10px + 1vw);
    font-weight: 500;
    margin: 0;
  }

  img {
    border: 3px solid $light;
    background: $light;
  }
}

.me {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transform: scaleX(1);
  font-size: initial;
}

nav {
  display: flex;
  gap: 30px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  a {
    color: $light;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0%;
      height: 2px;
      background: $light;
      transition: width 0.3s ease;
    }

    &:hover {
      color: lighten($light, 10%);
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
