---
layout: page
title: News
permalink: /news/
---


<!-- This code inserts an overview of all the news posts -->
<div class="container max-w-screen-lg py-8 md:py-8 mx-auto">
  <ul class="grid grid-cols-1 gap-8">
    {%- for post in site.posts -%}
    <li class="list-none">
      <div class="border-b border-gray-200 pb-8 flex flex-col md:flex-row items-center">
        {% if post.image %}
        <!-- Image Section (Mobile Layout: Above Title, Desktop Layout: Beside Title) -->
        <div class="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 md:order-2">
          <a href="{{ post.url | relative_url }}">
            <div class="relative w-full h-48 rounded-lg overflow-hidden">
              <img src="/assets/img/news/{{ post.image | relative_url }}" alt="{{ post.title }}" class="absolute inset-0 w-full h-full object-cover object-center">
            </div>
          </a>
        </div>
        {% endif %}
        <!-- Text Content Section -->
        <div class="flex-1 items-start">
          <div class="mb-4">
            <!-- Title with Link -->
            <h2 class="text-2xl tracking-tight font-bold text-gray-800">
              <a href="{{ post.url | relative_url }}" class="hover:text-primary-700">{{ post.title }}</a>
            </h2>
            <!-- Date and Metadata -->
            <div class="flex items-center text-xs text-secondary-600 font-bold uppercase pt-1">
              <time>{{ post.date | date: "%b %-d, %Y" }}</time>
            </div>
          </div>
          <!-- Excerpt/Content -->
          <div class="text-gray-700 post-content">
            {{ post.excerpt | strip_html }}
          </div>
          <!-- Read More Link -->
          <div class="mt-4">
            <a href="{{ post.url | relative_url }}" class="text-primary-500 uppercase text-sm font-semibold hover:text-primary-700">Read More <i class="fas fa-chevron-right ml-1"></i></a>
          </div>
        </div>
      </div>
    </li>
    {%- endfor -%}
  </ul>
</div>
