# performance-testing

This is a performance test of c++ node addon.

The test compares adding two numbers and sorting a array of size 100000 of 
random doubles in javascript vs c++.

It also checks marshalling time for making the c++ library call.

I consistently have found js outperforming the c++ addons in terms of speed.

Why?
