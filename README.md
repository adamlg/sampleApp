
## Overview

SwipedArt is simple: swipe right if you like a piece of art, swipe left if you don't.  You can also click the buttons on either side, or drag the image, to do the same thing.  This was mostly an exercise in using Docker and setting up a server (as well as architecting a file structure that would be easy for a team to use), so if you want to learn about either of those things, take a look at the server directory or the Dockerfile.

## Usage

From the root directory, run node server/server.js.  If you have Docker installed, you can also do 'docker build -i -t <yourtagname> .' to run the Dockerfile.

##To-dos (i.e. wish list):

* Animations for image transitions
* Encoding and saving images, instead of getting them from URL - can create lag
* Better indication than temporary class change that image has been rated

## Contributing

There's no formal process at the moment, so just add issues or make a pull request.  Any feedback or contributions are much appreciated.  
