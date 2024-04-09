---
layout: page
title: Team

team:
    -   name: Name1
        affiliation: Uni
        position: Position
        picture: Einstein.jpg
    -   name: Name1
        affiliation: Uni
        position: Position
        picture: Einstein.jpg
    -   name: Name1
        affiliation: Uni
        position: Position
        picture: Einstein.jpg
    -   name: Name1
        affiliation: Uni
        position: Position
        picture: Einstein.jpg
    -   name: Name1
        affiliation: Uni
        position: Position
        picture: Einstein.jpg
    -   name: Name1
        affiliation: Uni
        position: Position
        picture: Einstein.jpg
---


Introduction Text

<!-- This code inserts all team members. To add a team member, edit the team list above-->
<div class="pt-8 flex justify-center">
  <div class="flex flex-wrap justify-center max-w-screen-lg">
    {%- for person in page.team -%}
      <div class="flex justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
        <div class="bg-white rounded-sm text-center shadow-md p-6 w-full max-w-sm">
          <div class="flex justify-center pb-4">
            <img class="shadow rounded-full max-w-full h-auto align-middle border-none max-h-50" src="/assets/img/{{person.picture}}">
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ person.name }}</h3>
          <p class="text-sm text-gray-600">{{ person.position }}</p>
          <p class="text-sm text-gray-600 mt-4">{{ person.affiliation }}</p>
        </div>
      </div>
    {%- endfor -%}
  </div>
</div>