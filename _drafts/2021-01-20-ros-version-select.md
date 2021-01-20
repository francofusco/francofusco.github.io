---
layout: post
title:  "Switching between ROS 1 and 2"
date:   2021-01-20 16:00:00 +0100
categories: ros1 ros2
---

I work a lot with ROS, and have recently started using ROS2. However, I still
have quite a lot of code and projects that run on ROS1, and I thus need to
be able to "switch" between the two versions. I've come up with a very simple
solution, which is good enough for my needs of working alternately with Foxy
and Noetic without having to always source all files manually every time I open
a new console.

If you want to give it a try, have a look at my repo
[ros-version-select](https://github.com/francofusco/ros-version-select).
