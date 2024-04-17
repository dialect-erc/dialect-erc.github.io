---
layout: page
title: News
permalink: /news/
---


<!-- This code inserts an overview of all the news posts -->
<div class="container max-w-screen-lg py-8 md:py-8 mx-auto">
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {%- for post in site.posts -%}
    <li class="list-none">
      <div class="border-b border-gray-200 pb-8">
        <div class="items-center mb-4">
          <h2 class="text-2xl tracking-tight font-extrabold text-gray-800 sm:text-3xl">
            <a href="{{ post.url | relative_url }}" class="hover:text-primary-700">{{ post.title | escape }}</a>
          </h2>
          <span class="mx-3 h-1 w-8 bg-gray-300 hidden lg:inline-block"></span>
          <div>
              <time class="uppercase text-xs text-gray-500 font-bold">{{ post.date | date: "%b %-d, %Y" }}</time>
          </div>
        </div>
        <div class="text-gray-700 post-content">
          {{ post.excerpt | strip_html }}
        </div>
        <div class="mt-4">
          <a href="{{ post.url | relative_url }}" class="text-primary-500 uppercase text-sm font-semibold hover:text-primary-700">Read More <i class="fas fa-chevron-right ml-1"></i></a>
        </div>
      </div>
    </li>
    {%- endfor -%}
  </ul>
</div>