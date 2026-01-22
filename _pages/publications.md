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
    <button class="bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hidden" id="show-more-btn">
  Show More
</button>
</div>


<h2 class="text-2xl text-secondary-600 font-semibold pt-24 pb-12">Preprints</h2>
  {% bibliography --file preprints --template bib %}
</div>

<div id="show-more-preprints-container">
  <button class="bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hidden"
          id="show-more-preprints-btn">
    Show More
  </button>
</div>

<!-- Show more items when the button is clicked -->
<script>
document.addEventListener('DOMContentLoaded', function() {

  function setupShowMore(containerId, buttonId, numItemsToShow = 10) {
    const container = document.getElementById(containerId);
    const button = document.getElementById(buttonId);
    if (!container || !button) return;

    const items = container.querySelectorAll("#publication-item");

    function showMoreItems() {
      const hiddenItems = container.querySelectorAll('.hidden');
      const totalHiddenItems = hiddenItems.length;
      const itemsToReveal = Math.min(numItemsToShow, totalHiddenItems);

      for (let i = 0; i < itemsToReveal; i++) {
        hiddenItems[i].classList.remove('hidden');
      }

      if (container.querySelectorAll('.hidden').length === 0) {
        button.style.display = 'none';
      }
    }

    button.addEventListener('click', showMoreItems);
    showMoreItems();

    if (items.length > numItemsToShow) {
      button.classList.remove('hidden');
    }
  }

  // All Publications
  setupShowMore('publication-container', 'show-more-btn', 10);

  // Preprints
  setupShowMore('preprint-container', 'show-more-preprints-btn', 10);

});
</script>
