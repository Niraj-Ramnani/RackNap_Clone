/**
 * RackNap Clone - Component Loader
 * Dynamically loads HTML component partials into designated containers using Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  loadComponents();
});

async function loadComponents() {
  const componentElements = document.querySelectorAll('[data-component]');

  const loadPromises = Array.from(componentElements).map(async (container) => {
    const componentPath = container.getAttribute('data-component');
    try {
      const response = await fetch(componentPath);
      if (!response.ok) {
        throw new Error(`Failed to load ${componentPath}: status ${response.status}`);
      }
      const html = await response.text();
      container.innerHTML = html;
    } catch (error) {
      console.error(`Error loading component from ${componentPath}:`, error);
    }
  });

  await Promise.all(loadPromises);

  // Dispatch event indicating all components are loaded and ready in the DOM
  document.dispatchEvent(new CustomEvent('componentsLoaded'));
}
