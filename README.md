# Web Page for the DIALECT ERC Project

Link to webpage: https://dialect-erc.github.io/

This webpage is based on the [Cookie Theme](https://github.com/abhinavs/cookie) and uses Tailwind CSS for styling

### Editing Team Members
Go to _pages/team.md and add a new entry. Pictures for team members go in assets/img/team.

### Adding News Posts
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

### Adding Publications
Copy the Bibtex reference of the publication and add the reference to _bibliography/papers.bib. Make sure that the following fields in the Bibtex reference are populated, as these will be used to create the publication's entry on the website:
 - year
 - month
 - author
 - url
 - booktitle (or journal)

### Known Issues
 - Breadcrumbs only work for home. Deeper layers add a trailing / which does not seem to work on the live server
 - Add pagination for news and publications
