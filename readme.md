iSkip
=============

iSkip creates a container of images with a configurable key image. The effect is seen on Apple Mac computers when using iPhoto.

iSkip is created using the jQuery library.

Implementation
-------

### Calling iSkip

The simplest implementation to get iSkip working is by adding the code below. This will apply iSkip to a container with the ID of mousemove. Of course you can always add a class attribute if you wish to have multiple instances of iSkip on one page.

	$("#mousemove").iskip();

### Options

You can specify extra options to ad greater control to your iSkip implementation.

There are two methods for iSkip to loop through the images.

	mousemove
	
	click

Addtionally by setting a number in cycle tells iSkip how fast to change the images in the container, the lower the number the faster iSkip skips the images.

	cycle

See the statement below for how the iSkip demo was set up on this website.

	$("#mousemove").iskip({images:array, method:'mousemove', 'cycle':3});

### MIT License

Copyright (c) 2011 Ian Tearle

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.