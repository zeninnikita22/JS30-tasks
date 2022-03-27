const spacingVolume = document.querySelector("#spacing");
const blurVolume = document.querySelector("#blur");
const favoriteColor = document.querySelector("#base");

function variableChange() {
  const suffix = this.dataset.sizing;
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function colorChange() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

spacingVolume.addEventListener("change", variableChange);
blurVolume.addEventListener("change", variableChange);
favoriteColor.addEventListener("change", colorChange);
spacingVolume.addEventListener("mousemove", variableChange);
blurVolume.addEventListener("mousemove", variableChange);
