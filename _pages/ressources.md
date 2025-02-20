---
layout: page
title: Resources
permalink: /resources/
resources:
    -   name: WikiDIR
        tags:
            - dataset
            - linguistic-variation
        github: https://github.com/mainlp/WikiDIR
        paper: https://aclanthology.org/2025.coling-main.678/
        description: |
                An information retrieval dataset for German dialects and regional languages, with dictionaries of spelling/lexical variations.
    -   name: Eevee
        tags:
            - tool
            - linguistic-variation
            - label-variation
        github: https://github.com/AxelSorensenDev/Eevee
        paper: https://aclanthology.org/2024.law-1.20/
        description: |
                An NLP annotation tool that can run directly in the browser. It allows for annotation of multiple tasks on a single dataset and supports four task-types: sequence labeling, span labeling, text classification and seq2seq.
    -   name: MaiBaam
        tags:
            - dataset
            - linguistic-variation
        github: https://github.com/UniversalDependencies/UD_Bavarian-MaiBaam
        paper: https://arxiv.org/abs/2403.10293
        description: |
                A Bavarian Universal Dependency treebank with 15k annotated tokens from all Bavarian dialect areas and multiple text genres (wiki, fiction, grammar examples, social, non-fiction).
    -   name: NaBaLiSID
        tags:
            - dataset
            - linguistic-variation
        github: https://github.com/mainlp/NaLiBaSID
        description: |
                NaBaLiSID (Natural Lithuanian and Bavarian Slot and Intent Detection) provides new slot and intent detection evaluation datasets for Bavarian and Lithuanian, combining translations of xSID and MASSIVE with more natural, non-translated utterances.
    -   name: BarNER
        tags:
            - dataset
            - linguistic-variation
        github: https://github.com/mainlp/BarNER
        paper: https://arxiv.org/abs/2403.12749
        description: |
                BarNER (Bavarian Named Entity Recognition) presents annotations for named entities in Bavarian wiki and tweet data (161k tokens).
    -   name: Germanic LRL/Dialect Corpora
        tags:
            - dataset
            - linguistic-variation
        github: https://github.com/mainlp/germanic-lrl-corpora
        paper: https://aclanthology.org/2023.nodalida-1.41/
        description: |
                An overview of corpora for Germanic low-resource languages and dialects, covering >30 languages and >100 corpora.
    -   name: Human Label Variation
        tags:
            - dataset
            - label-variation
        github: https://github.com/mainlp/awesome-human-label-variation
        paper: https://aclanthology.org/2022.emnlp-main.731/
        description: |
                An overview of 50+ datasets with human label variation (multiple, un-aggregated annotations per instance) in Natural Language Processing and Computer Vision.
---


<div class="grid grid-cols-1 md:grid-cols-6 gap-4">
    <!-- Filters -->
    <div class="col-span-2 text-base text-start order-first md:pb-0 pb-8">
        <div class="gap-2 flex flex-col">
            <div class="text-headings font-semibold">
                Filter
            </div>
            <div class="flex items-center me-4">
                <input onclick="filterResources('tool')" id="tool-checkbox" type="checkbox" value="" class="w-4 h-4 text-amber-700 focus:ring-0 focus:ring-offset-0 bg-gray-100 border-gray-300 rounded">
                <label for="tool-checkbox" class="ms-2 pl-2 text-sm font-medium text-gray-900">Tool</label>
            </div>
            <div class="flex items-center me-4">
                <input onclick="filterResources('dataset')" id="dataset-checkbox" type="checkbox" value="" class="w-4 h-4 text-rose-700 focus:ring-0 focus:ring-offset-0 bg-gray-100 border-gray-300 rounded ">
                <label for="dataset-checkbox" class="ms-2 pl-2 text-sm font-medium text-gray-900 ">Dataset</label>
            </div>
            <div class="flex items-center me-4">
                <input onclick="filterResources('linguistic-variation')" id="linguistic-checkbox" type="checkbox" value="" class="w-4 h-4 text-sky-700 focus:ring-0 focus:ring-offset-0 bg-gray-100 border-gray-300 rounded ">
                <label for="linguistic-checkbox" class="ms-2 pl-2 text-sm font-medium text-gray-900 ">Linguistic Variation</label>
            </div>
            <div class="flex items-center me-4">
                <input onclick="filterResources('label-variation')" id="label-checkbox" type="checkbox" value="" class="w-4 h-4 text-emerald-700 focus:ring-0 focus:ring-offset-0 bg-gray-100 border-gray-300 rounded ">
                <label for="label-checkbox" class="ms-2 pl-2 text-sm font-medium text-gray-900 ">Label Variation</label>
            </div>
        </div>
    </div>
    <!-- Displayed Resources -->
    <div class="col-span-4 text-left">
        <ul id="resourceList" class="">
        {% for resource in page.resources %}
            <li class="resourceItem animate-fade duration-700 pb-8" data-tags="{{ resource.tags | join: ' '}}">
                <div class="resourceTags">
                <!-- bit of a hacky workaround. Might replace this later-->
                    {% for tag in resource.tags  %}
                        {% if tag == "tool" %}
                        <span class="inline-block px-2 py-0.5 mr-2 bg-amber-300 text-amber-800 font-semibold rounded-full text-xs capitalize">{{ tag }}</span>
                        {% elsif tag == "dataset" %}
                        <span class="inline-block px-2 py-0.5 mr-2 bg-rose-300 text-rose-800 font-semibold rounded-full text-xs capitalize">{{ tag }}</span>
                        {% elsif tag == "linguistic-variation" %}
                        <span class="inline-block px-2 py-0.5 mr-2 bg-sky-300 text-sky-800 font-semibold rounded-full text-xs capitalize">{{ tag | replace: "-", " " }}</span>
                        {% elsif tag == "label-variation" %}
                        <span class="inline-block px-2 py-0.5 mr-2 bg-emerald-300 text-emerald-8700 font-semibold rounded-full text-xs capitalize">{{ tag | replace: "-", " "  }}</span>
                        {% else %}
                        <span class="inline-block px-2 py-0.5 mr-2 bg-blue-700 text-white font-semibold rounded-full text-xs capitalize">{{ tag }}</span>
                        {% endif %}
                    {% endfor %}
                </div>
                <a href="{{ resource.github }}" target="_blank" rel="noreferrer" class="inline-block">
                    <div class="text-large py-1 font-bold text-heading hover:text-link">
                        {{ resource.name }}
                    </div>
                </a>
                <div class="text-base text-mainText">
                {{ resource.description }}
                </div>
                <div class="space-x-1 pt-1">
                    {% if resource.github %}
                    <a href="{{ resource.github }}" target="_blank" rel="noreferrer">
                        <i class="fab fa-github hover:text-link transition-transform transform hover:scale-110"></i>
                    </a>
                    {% endif %}
                    {% if resource.paper %}
                    <a href="{{resource.paper}}" target="_blank" rel="noreferrer">
                        <i class="fas fa-book-open cursor-pointer transition-transform transform hover:scale-110 hover:text-link"></i>
                    </a>
                    {% endif %}
                </div>
                <hr class="rounded w-full mt-2 gray-700 bg-gray-600">
            </li>
        {% endfor %}
        </ul>
    </div>
</div>

<script>
let activeFilters = [];

function filterResources(tag) {
    const resourceItems = document.querySelectorAll('.resourceItem');
    const index = activeFilters.indexOf(tag);
    if (index !== -1) {
        activeFilters.splice(index, 1);
    } else {
        activeFilters.push(tag);
    }

    resourceItems.forEach(item => {
        const tags = item.getAttribute('data-tags').split(' ');
        if (activeFilters.length === 0 || tagsContainAllActiveFilters(tags)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function tagsContainAllActiveFilters(tags) {
    return activeFilters.every(filter => tags.includes(filter));
}
</script>