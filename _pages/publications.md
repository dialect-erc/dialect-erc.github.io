---
layout: page
title: Publications
permalink: /publications/
---

<!-- container for the highlighted publications -->
<!-- styling for bibliography is done in _layouts/highlight.html -->
<!-- 
  jekyll scholar inserts ol and li tags automatically. Styling for these is done in
  assets/css/style.css and are selected via the highlighted-publications container
-->
<h2 class="text-2xl text-secondary-600 font-semibold pb-12">Selected Publications</h2>
<div id="highlighted-publications-container" class="pb-24">
  {% bibliography --file highlights --max 3 --template highlight %}
</div>

<h2 class="text-2xl text-secondary-600 font-semibold pb-12">All Publications</h2>
<!-- styling for bibliography is done in _layouts/bib.html -->
<!-- to add publications, edit the _bibliography/papers.bib file-->
<div id="publication-container">
  {% bibliography --template bib %}
</div>


<!-- "Show More" button -->
<div id="show-more-container">
  <button
    class="bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hidden"
    id="show-more-btn"
    type="button"
  >
    Show More
  </button>
</div>

<!-- Preprints -->
<h2 class="text-2xl text-secondary-600 font-semibold pt-24 pb-12">Preprints</h2>
<div id="preprint-container" class="pb-24">
  {% bibliography --file preprints --template bib %}
</div>

<div id="show-more-preprints-container">
  <button
    class="bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hidden"
    id="show-more-preprints-btn"
    type="button"
  >
    Show More
  </button>
</div>

<!-- Show more items when the button is clicked -->
<script>
document.addEventListener('DOMContentLoaded', function () {

  function setupShowMore(containerId, buttonId, numItemsToShow) {
    const container = document.getElementById(containerId);
    const button = document.getElementById(buttonId);
    if (!container || !button) return;

    let items = Array.from(container.querySelectorAll('#publication-item'));
    if (items.length === 0) {
      items = Array.from(container.querySelectorAll('li'));
    }

    if (items.length <= numItemsToShow) {
      button.classList.add('hidden');
      return;
    }

    items.forEach((item, idx) => {
      if (idx >= numItemsToShow) item.classList.add('hidden');
      else item.classList.remove('hidden');
    });

    button.classList.remove('hidden');

    button.addEventListener('click', function () {
      const hiddenItems = items.filter(it => it.classList.contains('hidden'));
      const toReveal = Math.min(numItemsToShow, hiddenItems.length);

      for (let i = 0; i < toReveal; i++) {
        hiddenItems[i].classList.remove('hidden');
      }

      if (items.every(it => !it.classList.contains('hidden'))) {
        button.classList.add('hidden');
      }
    });
  }

  // All Publications
  setupShowMore('publication-container', 'show-more-btn', 10);

  // Preprints
  setupShowMore('preprint-container', 'show-more-preprints-btn', 10);
});
</script>
