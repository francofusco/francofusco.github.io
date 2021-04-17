---
layout: post
title:  "How I created this website"
date:   2021-01-20 12:00:00 +0100
categories: jekyll github
---

<!--
SOURCES:
https://github.com/jekyll/minima
https://blog.slowb.ro/dark-theme-for-minima-jekyll/
https://jekyllrb.com/docs/installation/ubuntu/
https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages
-->

This is my first time using GitHub Pages and, more in general, it is the first
time I work on a website. Thanks to the countless resources available online,
it was fairly simple to take the first steps. However, as it often happens when
following tutorials & friends, you feel totally lost as soon as you try to make
small modifications that are not thoroughly explained in the resources you are
diligently following. You know, those kind of details (such as colors,
decorative frames, *etc*.) that seem so easy to implement and yet make you
struggle for hours in front of the screen! For this reason, I thought it would
be nice to share my experience, in particular describing how I (as a **total**
novice) managed to get my website running and personalized the look of my pages.


## A first attempt

My very first attempt dates back to August 2020, while writing my PhD thesis,
and pretty much consisted in letting GitHub create everything for me.
I think I followed the "official"
[GitHub Guide](https://guides.github.com/features/pages/),
but I am not 100% sure. Whatever the actual tutorial was, I created the repo
`francofusco.github.io` which would have contained all the details of my page.

I jumped to the settings, looking for the options related to the management of
GitHub Pages, and selected the theme I wanted. I like keeping things simple, so
I went for [*minimal*](https://pages-themes.github.io/minimal/)
(not to be confused with [*minima*](https://jekyll.github.io/minima/), more on
this later!). I really did not have much time to spend on this - I never managed
to convince my thesis writing itself - and thus I just added some dummy
text and focused on more serious business.

Time passed, and months after I finally decided to go and finish my website.
I tried a couple of things, read more about [*Jekyll*](https://jekyllrb.com/) -
which, as I discovered, was the little guy making things work in my first
website version - and realized that I wanted to start everything all over again.
So, I deleted everything, changed the default branch from `master` to `main`
and grabbed a cup of coffee, ready for the second run.


## Version 2, using Jekyll

The website was rebuilt using Jekyll, which, in a nutshell, allows to generate
static pages from markdown content. To get started, it is sufficient to follow
the steps detailed in [Jekyll's website](https://jekyllrb.com/docs/installation/ubuntu/),
after which the PC will be equipped with all the tools needed to generate a
static website. I haven't tested the same under Windows/Mac, however it should
be fairly simple to accomplish the same in any other OS.

<div class="warnbox" markdown="1">
  While performing the last step of the installation guide - executing the
  command `gem install jekyll bundler` - I encountered an error related to
  the connection being timed out. Although I do not entirely understand the
  issue, the solution (obviously found somewhere in a StackOverflow post!)
  was rather easy and consisted in temporarily disabling IPv6 in the
  network settings.
</div>

Then, the magic command that started everything:

```bash
jekyll new .  # creates a new website in the current directory
```

After waiting few seconds, my directory had been filled with a couple of new
files and folders! :tada: Being sometime very impatient, I immediately
tried to see my new website by running

```
bundle exec jekyll serve
```

and connecting to `localhost:4000` from a browser. And voilà, the website was
there! :heart_eyes:

At this point, I did not know what I had to do to customize the website, and of
course the first resource I tried to follow was
[Jekyll's step by step tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/).
However, I was a little lost (not sure why :thinking:) and felt that this resource was
not the good one for me. While looking for some alternative tutorials, I found
[this one](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages)
which helped me a in the first steps of customization. Since I had already
installed dependencies and created the website, I simply started from the section
[Tweaking the settings](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages#tweaking-the-settings-).
It thus proceeded to update my personal info in the `_config.yaml` file and
started understanding how to create pages & co.

Before making further changes, I wanted to make sure that the website could be
hosted on GitHub Pages. To do that, I understood (of course, not by my own but
thanks to the amazing people of the web) that I had to change the content of
the `Gemfile`. In particular, the line

```ruby
gem "jekyll", "~> 4.2.0"
```

had to be commented, while the line

```ruby
gem "github-pages", group: :jekyll_plugins
```

had to be un-commented. Note that this is even written in the `Gemfile`
generated automatically by Jekyll, which also instructs you to run
`bundle update github-pages` afterwards. All of this being down, I proceeded to
`git add/commit/push` all the changes on my remote's `main` branch. Finally,
on GitHub I made sure to update, in my repo's settings, the options related to
GitHub pages. In particular, I have it set to use `main` as the source branch
and `/ (root)` as the base folder. The website was now up and running :sunglasses:

## Changing the theme

So far, so good. But I wanted to change the "default" theme to something that
suited my taste. After looking around, I decided that I liked the way the
default `minima` theme looked like, but I wanted to change the color palette
to something darker. Few web-searches later, I discovered that `minima`
actually supported changing the colors natively by providing a set of
"skins": `classic`, `dark`, `solarized` and `solarized-dark`.
However, this feature was introduced in v3 of `minima`, and (of course
:roll_eyes:) I was still using v2. Luckily, `minima`'s [README](https://github.com/jekyll/minima),
[this post](https://blog.slowb.ro/dark-theme-for-minima-jekyll/)
and
[this issue comment](https://github.com/jekyll/minima/issues/419#issuecomment-558693485)
helped me understanding what were the (admittedly minor) changes to `Gemfile`
and `_config.yaml` required to get everything up and working.

Now the website looked more or less like what I wanted. I just changed few
details, like the title color (in `_sass/minima/custom-variables.css`) which
is now red.

I also added the definition of some "framed boxes" via the
`assets/css/style.css` file. With that, I can now add text into colored
containers, like the "warning box" above, and the ones below.
Feel free to borrow my code (beware: I am not sure of what I am doing :joy:)
and to use it.
Note that markdown support in the "error box" is off on purpose, and the extra
space on the bottom is not an error (it has been added explicitly as a test).

<div class="errorbox" markdown="0" style="padding-bottom:50px">
  This is an **example dummy text** that I need simply to test the framed boxes.
  It does not need to really make sense, in fact ~~foo bar baz~~ and _Lorem ipsum
  dolor sit amet_.
</div>

<div class="okbox" markdown="1">
  This is an **example dummy text** that I need simply to test the framed boxes.
  It does not need to really make sense, in fact ~~foo bar baz~~ and _Lorem ipsum
  dolor sit amet_.
</div>

<div class="framedbox" markdown="1">
  This is an **example dummy text** that I need simply to test the framed boxes.
  It does not need to really make sense, in fact ~~foo bar baz~~ and _Lorem ipsum
  dolor sit amet_.
</div>

The last touch was to add the `jemoji` plugin (in `_config.yaml`) so that I can
(ab)use emojis in posts and pages :heart:

## Conclusions

As of today, that's all! I hope that description of the steps I had to follow
and the links can be useful for anyone that wants to start using Jekyll and
GitHub pages. I'll try to update this post in case I add significant changes
to my website. Until then, have fun! :hugs:
