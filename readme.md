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