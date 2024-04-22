---
layout: page
title: Resources
permalink: /resources/
resources:
    -   name: Eevee
        tags:
            - tool
            - linguistic-variation
            - label-variation
        url: https://github.com/AxelSorensenDev/Eevee
        description: |
                An Easy Annotation Tool for Natural Language Processing. It can run directly in the browser (no setup required) and uses tab-separated files (as opposed to character offsets or task-specific formats) for annotation. It allows for annotation of multiple tasks on a single dataset and supports four task-types: sequence labeling, span labeling, text classification and seq2seq.
    -   name: MaiBaam
        tags:
            - dataset
            - linguistic-variation
        url: https://github.com/UniversalDependencies/UD_Bavarian-MaiBaam
        description: |
                A Multi-Dialectal Bavarian Universal Dependency Treebank. Despite the success of the Universal Dependencies (UD) project exemplified by its impressive language breadth,
                there is still a lack in ‘within-language breadth’: most treebanks focus on standard languages. Even for German, the
                language with the most annotations in UD, so far no treebank exists for one of its language varieties spoken by
                over 10M people: Bavarian. To contribute to closing this gap, we present the first multi-dialect Bavarian treebank
                (MaiBaam) manually annotated with part-of-speech and syntactic dependency information in UD, covering multiple
                text genres (wiki, fiction, grammar examples, social, non-fiction).
    -   name: NaBaLiSID
        tags:
            - dataset
            - linguistic-variation
        url: https://github.com/mainlp/NaLiBaSID
        description: |
                We present NaBaLiSID (Natural Lithuanian and Bavarian SID), which contains new slot and intent detection evaluation datasets for Bavarian and Lithuanian, created by manual translation.
    -   name: Germanic LRL Corpora
        tags:
            - dataset
            - linguistic-variation
        url: https://github.com/mainlp/germanic-lrl-corpora
        description: |
                A Survey of Corpora for Germanic Low-Resource Languages and Dialects. Despite much progress in recent years, the
                vast majority of work in natural language
                processing (NLP) is on standard languages
                with many speakers. In this work, we
                instead focus on low-resource languages
                and in particular non-standardized lowresource languages. Even within branches
                of major language families, often considered well-researched, little is known about
                the extent and type of available resources
                and what the major NLP challenges are for
                these language varieties. Focusing on
                Germanic low-resource language varieties,
                we provide such an overview in this dataset.
    -   name: BarNER
        tags:
            - dataset
            - linguistic-variation
        url: https://github.com/mainlp/BarNER
        description: |
                Recognizing Named Entities in Bavarian Dialectal Data. Named Entity Recognition (NER) is a fundamental task to extract key information from texts, but annotated resources are scarce for dialects. This is the first dialectal NER dataset for German with 161K tokens annotated on Bavarian Wikipedia articles (bar-wiki) and tweets (bar-tweet), using a schema adapted from German CoNLL 2006 and GermEval.
    -   name: Awesome Human Label Variation
        tags:
            - dataset
            - label-variation
        url: https://github.com/mainlp/awesome-human-label-variation
        description: |
                A curated list of awesome datasets with human label variation (un-aggregated labels) in Natural Language Processing and Computer Vision, including links to related initiatives and key references. The key focus is to collect datasets that contain multiple annotations per instance, to enable learning with human label variation/disagreement. 
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
                        <span class="inline-block px-2 py-0.5 mr-2 bg-sky-300 text-sky-800 font-semibold rounded-full text-xs capitalize">{{ tag }}</span>
                        {% elsif tag == "label-variation" %}
                        <span class="inline-block px-2 py-0.5 mr-2 bg-emerald-300 text-emerald-8700 font-semibold rounded-full text-xs capitalize">{{ tag }}</span>
                        {% else %}
                        <span class="inline-block px-2 py-0.5 mr-2 bg-blue-700 text-white font-semibold rounded-full text-xs capitalize">{{ tag }}</span>
                        {% endif %}
                    {% endfor %}
                </div>
                <a href="{{ resource.url }}" class="inline-block">
                    <div class="text-large py-1 font-bold text-heading hover:text-link">
                        {{ resource.name }}
                    </div>
                </a>
                <div class="text-base text-mainText">
                {{ resource.description }}
                </div>
                <a class="pt-1" href="{{resource.url}}">
                    <i class="fas fa-chevron-right cursor-pointer transition-transform transform hover:scale-110 hover:text-link"></i>
                </a>
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