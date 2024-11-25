---
layout: page
title: Talks
permalink: /talks/
talks:
  - title: Human-facing Natural Language Processing
    event: Keynote talk at Danish Digitalization, Data Science and AI (D3A) conference
    speaker: Prof. Barbara Plank
    link: https://d3aconference.dk/d3a-1-0/
    date: 2024-02-02
    location: Nyborg, Denmark
  - title: Human-centric Natural Language Processing
    event: Keynote talk at Conference and Labs of the Evaluation Forum (CLEF)
    speaker: Prof. Barbara Plank
    location: Thessaloniki, Greece
    date: 2023-08-18
  - title: From Human Label Variation and Model Uncertainty to Error Detection (and Back)
    event: Keynote talk at NLPerspectives workshop at LREC-COLING
    speaker: Prof. Barbara Plank
    location: Turin, Italy
    date: 2024-05-21
  - title: Natural Language Processing for Non-standard Language Varieties
    event: Keynote talk at Text+ conference 2024
    speaker: Prof. Barbara Plank
    date: 2024-06-28
    location: Munich, Germany
    image: text-plus-logo.svg
  - title: Munich AI Day 2024
    event: Panel discussion
    speaker: Prof. Barbara Plank
    date: 2024-07-04
    image: MCML_Logo_cropped.jpg
    location: Munich, Germany
    link: https://mcml.ai/events/2024-07-04-munich-ai-day/
  - title: Are LLMs Widening or Narrowing Our Horizon? Let's Embrace Variation for Trustworthy NLP
    event: Keynote presentation at ACL 2024
    speaker: Prof. Barbara Plank
    date: 2024-07-04
    image: acl-logo.png
    location: Bangkok, Thailand
    link: https://2024.aclweb.org/program/keynotes/#barbara-plank
---

<div>
    {% assign sorted_talks = page.talks | sort: 'date' | reverse %}
    {% for talk in sorted_talks %}
    <div class="group pb-8">
        <div class="grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-6 items-center">
            <div>
                {% if talk.link %}
                <a href="{{ talk.link }}" target="_blank" rel="noreferrer" class="block">
                    <h3 class="text-xl font-semibold text-link hover:text-blue-500">{{ talk.title }}</h3>
                </a>
                {% else %}
                    <h3 class="text-xl font-semibold">{{ talk.title }}</h3>
                {% endif %}
                <p class="text-xs text-secondary-600 font-bold uppercase pt-1 pb-2">{{ talk.date | date: "%b %-d, %Y" }}</p>
                <p class="text-base text-gray-600">{{ talk.event }}, <span class="italic">{{ talk.location }}</span></p>
                <p class="text-base text-gray-600"><span class="font-semibold">Speaker: </span>{{ talk.speaker }}</p>
            </div>
            {% if talk.image %}
            <div class="w-full">
                <div class="relative  w-1/2 md:w-full h-40 overflow-hidden rounded-lg">
                    <img src="/assets/img/talks/{{ talk.image }}" alt="{{ talk.title }} logo" class="absolute inset-0 w-full h-full object-scale-down object-center">
                </div>
            </div>
            {% else %}
            <div class="w-full mt-1 flex items-center justify-center">
                <div class="md:h-40 hidden md:block"></div> <!-- Placeholder div to maintain height -->
            </div>
            {% endif %}
        </div>
        <hr class="rounded w-full gray-700 bg-gray-600">
    </div>
    {% endfor %}

</div>
