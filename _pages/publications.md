---
layout: page
title: Publications
---

<!-- styling for bibliography is done in _layouts/bib.html -->
<!-- to add publications, edit the _bibliography/papers.bib file-->
<div id="publication-container">
  {% bibliography --template bib %}
</div>


<!-- "Show More" button -->
<div id="show-more-container">
    <button class="bg-link-500 hover:bg-link-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md" id="show-more-btn">
  Show More
</button>
</div>


<!-- Show more items when the button is clicked -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const publicationContainer = document.getElementById('publication-container');
    const showMoreBtn = document.getElementById('show-more-btn');
    let numItemsToShow = 15; // Number of items to reveal each time

    if (showMoreBtn && publicationContainer) {
        function showMoreItems() {
        let hiddenItems = publicationContainer.querySelectorAll('.hidden');
        let totalHiddenItems = hiddenItems.length;

        const itemsToReveal = Math.min(numItemsToShow, totalHiddenItems);
        for (let i = 0; i < itemsToReveal; i++) {
            hiddenItems[i].classList.remove('hidden');
        }
        totalHiddenItems -= numItemsToShow
        // Hide the "Show More" button if all items are revealed
        if (totalHiddenItems <= 0) {
            showMoreBtn.style.display = 'none';
        }
    }
    showMoreBtn.addEventListener('click', showMoreItems);
    // click once on page load
    showMoreItems();
  }
});
</script>