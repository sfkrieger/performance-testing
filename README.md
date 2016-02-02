# performance-testing

This is doing a performance test of of writing c++ node addons.

The test compares adding two numbers and sorting a array of size 100000 of 
random doubles.

It also checks marshalling time for making the c++ library call.

I consistently have found js outperforming the c++ addons in terms of speed.

Why?
