---
layout: page
title: Team
permalink: /team/

team:
  - name: Barbara Plank
    affiliation: LMU Munich
    position: Prof. Dr. and Chair for AI and Computational Linguistics
    picture: barbara.jpg
    website: https://bplank.github.io/
  - name: Siyao (Logan) Peng
    affiliation: LMU Munich
    position: Postdoc
    picture: logan.jpeg
    website: https://logan-siyao-peng.github.io/
  - name: Yang Janet Liu
    affiliation: LMU Munich
    position: Postdoc
    picture: janet.png
    website: https://janetlauyeung.github.io/
  - name: Xinpeng Wang
    affiliation: LMU Munich
    position: PhD student
    picture: xinpeng.jpg
    website: https://xinpeng-wang.github.io/
  - name: Verena Blaschke
    affiliation: LMU Munich
    position: PhD student
    picture: verena.png
    website: https://verenablaschke.github.io/
  - name: Soh-Eun (Ryan) Shim
    affiliation: LMU Munich
    position: PhD student
    picture: default.png
    website: https://www.cis.lmu.de/personen/mitarbeiter/soheunshim/index.html
  - name: Felicia Körner
    affiliation: LMU Munich
    position: PhD student
    picture: felicia.JPG
    website: https://koernerfelicia.github.io/
  - name: Sebastian Loftus
    affiliation: LMU Munich
    position: Student assistant
    picture: sebastian.jpg
  - name: Chengzhi Hu
    affiliation: LMU Munich
    position: Student assistant
    picture: chengzhi.png
  - name: Miriam Winkler
    affiliation: LMU Munich
    position: Student assistant
    picture: miriam.jpg
  - name: Huangyan Shan
    affiliation: LMU Munich
    position: Student assistant
    picture: huangyan.jpg
---

<!-- This code inserts all team members. To add a team member, edit the team list above-->
<div class="pt-8 flex justify-center">
  <div class="flex flex-wrap justify-center max-w-screen-lg">
    {%- for person in page.team -%}
      <div class="flex justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
        <div class="bg-white rounded-sm text-center shadow-md p-6 w-full max-w-sm">
          <div class="flex justify-center pb-4">
            <img class="shadow rounded-full object-cover md:w-32 md:h-32 lg:w-40 lg:h-40" src="/assets/img/team/{{person.picture}}">
          </div>
          {% if person.website %}
            <a href="{{person.website}}">
              <h3 class="text-xl font-semibold text-linkLight hover:text-link mb-2">{{ person.name }}</h3>
            </a>
          {% else %}
            <h3 class="text-xl font-semibold text-headings mb-2">{{ person.name }}</h3>
          {% endif %}
          <p class="text-sm text-lightText">{{ person.position }}</p>
          <p class="text-sm text-lightText mt-4 italic align-bottom">{{ person.affiliation }}</p>
        </div>
      </div>
    {%- endfor -%}
  </div>
</div>
