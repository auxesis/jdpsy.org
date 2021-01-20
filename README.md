# jdpsy.org

This is the source for Jeroen Decates's clinic website.

![screenshot of home page](/img/readme/homepage.png)

## How does this work?

 - [jdpsy.org](https://jdpsy.org) is served off _GitHub Pages_. GitHub Pages is a free website hosting system provided by _GitHub_.
 - The jdpsy.org website is stored in a _repository_. A repository is a collection of files under a directory. A repository tracks all the changes you make to files in the repository. Your repository lives on GitHub.
 - The jdpsy.org website is built using a tool called _[Jekyll](https://jekyllrb.com/)_. Jekyll is a very simple system for building websites.
 - You make changes to the jdpsy.org website in a _local copy_ of the repository. This local copy is sometimes called a _clone_.
 - When you make changes to the local copy, you must record the changes. We do this by making a _commit_. A commit is one or more changes (like adding an image, removing some text), with a _description_ of the change. The description is helpful for remembering _why_ you made a change.
 - When you've finished making your changes, you publish the website by _syncing_ the repository back to GitHub.
 - GitHub Pages sees your changes, and publishes them so everyone else can see them at https://jdpsy.org.

## First time setup

**NOTE: You only need to do these steps once.**

### You need a GitHub account

If you don't have one already, [sign up for a GitHub account](https://github.com/join).

This allows you to publish your changes to the website.

### You need some software to get started

Download and install:

- [GitHub Desktop](https://desktop.github.com/), to record your changes
- [Atom](https://atom.io/) editor, to change the files
- Ruby to see a local copy of the website

### Set up your local copy of the site

In GitHub Desktop, clone the repository:

![screenshot of cloning the repo](/img/readme/clone-the-repo.png)

Select and clone the `jdpsy.org` repository:

![screenshot of selecting the repo](/img/readme/select-jdpsy-for-cloning.png)

Open the repository in terminal:

![screenshot of launching terminal  in GitHub Desktop](/img/readme/open-in-terminal.png)

Type `sudo ./setup.sh` into the terminal, and press enter:

![screenshot of running setup script](/img/readme/run-setup-script.png)

## How to make changes

**NOTE: Make sure you have followed the setup steps before trying this.**

### See a local copy of the site

From GitHub Desktop, open the repository in terminal:

![screenshot of launching terminal  in GitHub Desktop](/img/readme/open-in-terminal.png)

Start up a local copy of the site by typing `jekyll serve` and pressing enter:

![screenshot of starting jekyll](/img/readme/start-jekyll.png)

Then go to http://localhost:4000/ in your browser:

![screenshot of starting jekyll](/img/readme/see-local-site.png)

### Make some changes

Back in GitHub Desktop, open the repo in Atom:

![screenshot of opening the repo in atom](/img/readme/open-in-atom.png)

Select the file you want to edit:

![screenshot of selecting a file in atom](/img/readme/select-file-in-atom.png)

Make some changes to the text or HTML, and save:

![screenshot of selecting a file in atom](/img/readme/save-change-in-atom.png)

See the changes in the browser by navigating to the page.

The website is built with [Jekyll](https://jekyllrb.com/), [Bootstrap](http://getbootstrap.com/), and [Font Awesome](http://fontawesome.io/).

If you want to make changes to the page layout or the display of content, check out Bootstrap's [excellent reference documentation](http://getbootstrap.com/css/).

You can [browse icons](http://fontawesome.io/icons/) on Font Awesome, and add elements to the page to use the icon:

``` html
<i class="fa fa-flag"></i>
```

### Record your changes

Back in GitHub Desktop, switch to the _Uncommitted Changes_ tab, and describe your changes:

![screenshot of committing the change in GitHub Desktop](/img/readme/save-change-in-github-desktop.png)

Then click the _Commit_ button at the bottom of the window.

### Publish your changes

To publish your changes to the real [jdpsy.org](https://jdpsy.org/), press the _Sync_ button in the top right:

![screenshot of selecting a file in atom](/img/readme/sync-to-github.png)

Go to https://jdpsy.org in your browser to see your changes.
