# File-System

## How to run?

First we need to run the command below to install libraries:
#### npm i express nodemon fs

After that, we can run with 
#### npm start

## How to use?

We can work with 4 paths:

#### '/' 
    Where we can see the current state of our File System.
#### '/createFile?folder=X&file=Y&value=Z' 
    Where we need to pass 3 paramethers, the folder we want to save, the number of the  file, and the value of this. 
#### '/deleteFile?folder=X&file=Y' 
    Where we pass the folder and file that we wanna delete.
#### '/formatSystem' 
    It resets the system to the initial state. 

## How it works?

The File System it's simulated by a JSON file, called 'filesSystem.json', in the mock folder. Here is our directory and files.

All the methods that are in the app.js are modifying, creating and deleting data from this JSON, all working with HTTP paths, not using the File System from Microsoft Windows.

It's needed to say that this simulator it's only working to support 5 folders, with 5 files inside each folder, and 5 files with no folder, so, if you try to create a 6 folder, o a 6 file, it will not work.