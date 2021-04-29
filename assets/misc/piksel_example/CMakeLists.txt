# Project configuration
cmake_minimum_required(VERSION 3.12)
project(piksel_example)
# Compile piksel
add_subdirectory(piksel)
# Compile the example
add_executable(piksel_example piksel_example.cpp)
target_include_directories(piksel_example PUBLIC piksel/src)
target_link_libraries(piksel_example piksel)
