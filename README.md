# Webpage for the DIALECT ERC Project

Link to webpage: https://dialect-erc.github.io/

This webpage is based on the [Cookie Theme](https://github.com/abhinavs/cookie) and uses Tailwind CSS for styling

 * [Contributing to the repository](#contributing-to-the-repository)
 * [Editing Team Members](#editing-team-members)
 * [Adding News Posts](#adding-news-posts)
   + [Images in News Posts](#images-in-news-posts)
 * [Adding Publications](#adding-publications)
 * [Known Issues](#known-issues)



## Contributing to the repository

**Prerequisites to build the project locally**:  
- Jekyll (tested with v4.3.3): [Jekyll Installation Guide](https://jekyllrb.com/docs/installation/)
- Node.js (tested with v20.12.1): [NodeJS Download](https://nodejs.org/en/download)

**Build the project**:
 - clone this repository to your local machine
 - cd into the cloned repository and run ```bin/bootstrap```. This will install all required dependencies for the project.
 - run ```bundle exec jekyll serve```. This will start a local development server, making the website accessible at http://127.0.0.1:4000/. After the server is running, you can edit the project files locally.
Reload http://127.0.0.1:4000/ in your browser to see the changes applied.

**Pushing to the live server**:

After you made your changes locally, create a commit and push it to the *master* branch. Upon pushing to the master branch, a deploy script (located under .github/workflows) is automatically triggered.
This script will deploy the changes to the live server.

## Editing Team Members
Go to _pages/team.md and add a new entry. Pictures for team members go in assets/img/team.

## Adding News Posts
Go to the _posts directory and create a new markdown file.
> [!NOTE]  
> When saving the file, please follow the following format: yyyy-mm-dd-\<your-title\>.md

Add the following three lines at the beginning of the file
```
---
layout: post
---
```
After this, you can start writing your Markdown file as usual.
The newly created post should then appear automatically under the news section. The two most recent news postings appear on the landing page.

### Images in News Posts

You can add a teaser image to your news posts by adding an image tag at the beginning of the file. For example:
```
---
layout: post
image: example-img.jpg
---
```
Place your images under assets/img/news/. You can also use MaiNLP logo as a default image for your news posts by adding *image: default.png*
The teaser image will then be displayed on the landing page, news overview page and at the top of the news posting under the title. 

If you want to add further images to your news post, you can do so by adding the following code to your markdown file:
```
<img class="h-auto max-w-full" src="path/to/img">
```
## Adding Publications
Copy the Bibtex reference of the publication and add the reference to _bibliography/papers.bib. Make sure that the following fields in the Bibtex reference are populated, as these will be used to create the publication's entry on the website:
 - year
 - month
 - author
 - url
 - booktitle (or journal)

## Known Issues
\-
