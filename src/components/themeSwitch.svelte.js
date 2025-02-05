import { pipeline } from "$lib/helpers";

export var currentTheme = $state({ value: "dark" });

// ******************************************

export function updateThemeOnInitialLoad() {
  var storedThemeValue = localStorage.getItem("theme") ?? "dark";
  getHTMLElement().dataset.theme = storedThemeValue;
  currentTheme.value = storedThemeValue;
}

export function implementThemeToggling(themeToggleButton) {
  var themeTogglePipeline = pipeline(
    toggleTheme,
    updateCurrentTheme,
    updateThemeInLocalStorage
  );

  themeToggleButton?.addEventListener("click", themeTogglePipeline);

  return function cleanup() {
    themeToggleButton?.removeEventListener("click", themeTogglePipeline);
  };
}

function getHTMLElement() {
  return document.querySelector("html");
}

function updateCurrentTheme() {
  var theme = getHTMLElement().dataset.theme;
  currentTheme.value = theme;
}

function toggleTheme() {
  var theme = getHTMLElement().dataset.theme;

  if (theme == "light") {
    getHTMLElement().dataset.theme = "dark";
  } else {
    getHTMLElement().dataset.theme = "light";
  }
}

function updateThemeInLocalStorage() {
  localStorage.setItem("theme", currentTheme.value);
}
