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
this later!). I really did not have much time to spend on this - I really
could not convince my thesis to write itself - and thus I just added some dummy
text and focused on more serious business.

Time passed, and months after I finally decided to go and finish my website.
I tried a couple of things, read more about [*Jekyll*](https://jekyllrb.com/) -
which, as I discovered, was the little guy making things work in my first
website version - and realized that I wanted to start everything all over again.
So, I deleted everything, changed the default branch from `master` to `main`
and grabbed a cup of coffee, ready for the second run.


## Version 2, using Jekyll

The website was built using Jekyll, which, in a nutshell, allows to generate
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

**THE POST IS NOT COMPLETED YET! SORRY...**

I will try to complete it soon :)

<div class="errorbox" markdown="0" style="padding-bottom:5px">
  This is an example dummy text that I need simply to test the framed boxes.
  It does not need to really make sense, in fact foo bar baz and "Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat a nisi
  facilisis sollicitudin. Suspendisse pretium consectetur maximus."
</div>

<div class="framedbox" markdown="1">
  This is an **example dummy text** that I need simply to test the framed boxes.
  It does not need to really make sense, in fact ~~foo bar baz~~ and _Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat a nisi
  facilisis sollicitudin. Suspendisse pretium consectetur maximus_.
</div>

<div class="okbox" markdown="1">
  This is an **example dummy text** that I need simply to test the framed boxes.
  It does not need to really make sense, in fact ~~foo bar baz~~ and _Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat a nisi
  facilisis sollicitudin. Suspendisse pretium consectetur maximus_.
</div>
