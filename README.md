# SentientSystem website

_https://sentientsystem.netlify.com_ - A [JAMstack](https://jamstack.org/) product site built using [Jekyll](https://jekyllrb.com/), hosted with [Netlify](https://www.netlify.com), administered [here](https://app.netlify.com/sites/sentientsystem).

## Content contribution guide

This site has [Netlify CMS](https://www.netlifycms.org/) set up for content authoring, reviewing and publication via [http://sentientsystem.com/**admin/**](http://sentientsystem.com/admin/) (don't forget the trailing slash)

Doing this requires a site _admin account_ (Netlify Identity) that are manually created through the Netlify admin console [here](https://app.netlify.com/sites/sentientsystem/identity).

Currently there are no actively used content types. In the future, it is expected that things like blogs, R&D projects and case studies will be designed, developed and configured to be managed using this CMS. An explination about each compoent type will be documented here.

## Local Development

 1. Get Jekyll installed in your PC: take a look at [this tutorial](https://jekyllrb.com/docs/installation/)  
 2. Clone the repository
  `git clone https://github.com/Synergetic-Engineering/sentientsystem.com.git`
  before you doing this step, please ensure your PC already installed GIT, not yet install GIT ? Please take a look [this tutorial](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 3. Install bundle dependencies with: `bundle install`
 4. Serve locally with live-reload `jekyll serve --watch` 
 5. Build the jekyll site with command: `jekyll serve`

Useful links for development

- https://jamstack.org/
- https://jekyllrb.com/
- https://www.netlify.com
- https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
- https://getbootstrap.com/docs/4.0/layout/grid/
- https://sass-lang.com/documentation/file.SASS_REFERENCE.html

## Site configuration / development guide

### Menu

1. Open **_data folder**
2. Open file **menu.yml**
There is 2 fields should be fill out, **label:** , **target:** 
Field **label:** is the text of the menu and **target:** is the URL/Link

### Page meta description
To change text inside tag `<meta name="description" content="">`
 and text before **Our Capabilities** section you can edit file **_config.yml** and fillout the text in field **description:**

### Lading Page

#### Banner/Hero

1. Open **_data folder**
2. Open file **banner.yml**
There is 4 fields should be fill out, **background:** , **title:** , **description:** , **floating_logo:**
Put the filename with full of the path for **background:** and **floating_logo:**

####  Section: Our Capabilities

1. Open **_data folder**
2. Open file **capabilities.yml**
There is 3 fields should be fill out, **icon:** , **name:** , **description:**
Put the filename with full of the path for **icon:**

####  Section: Your Outcomes

1. Open **_data folder**
2. Open file **outcomes.yml**
There is 4 fields should be fill out, **icon:** , **name:** , **description:**, **target_url:**
Put the filename with full of the path for **icon:**

####  Section: What is your role?

1. Open **_data folder**
2. Open file **your_role.yml**
There is 3 fields should be fill out, **image:** , **title:** , **subtitle**, **description:**, **target_url:**
Put the filename with full of the path for **image:**


####  Section: Common issues we Address

1. Open **_data folder**
2. Open file **your_role.yml**
There is 3 fields should be fill out, **image:** , **title:** , **subtitle**, **description:**, **target_url:**
Put the filename with full of the path for **image:**


