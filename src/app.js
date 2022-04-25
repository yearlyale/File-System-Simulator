// IMPORTS AND CONFIG

const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3030;
const fileName = 'mock/filesSystem.json';
const fullPath = `${__dirname}/${fileName}`;

app.listen(PORT, () => {
    console.log('Listening on localhost:' + PORT);
});

// ROUTES

app.get('/', (req, res) => { res.sendFile(fullPath); });

app.get('/createFile', (req, res) => {
    let json = readSystemData();
    const folder = req.query.folder;
    const file = req.query.file;
    const value = req.query.value;
    createFile(json, folder, file, value);
    printSystemData(res, json);
});

app.get('/deleteFile', (req, res) => {
    let json = readSystemData();
    const folder = req.query.folder;
    const file = req.query.file;
    deleteFile(json, folder, file);
    printSystemData(res, json);
});

app.get('/formatSystem', (req, res) => {
    formatSystem();
    let json = readSystemData();
    printSystemData(res, json);
});

// METHODS

let readSystemData = () => {
    let buffData = fs.readFileSync(fullPath);
    return json = JSON.parse(buffData);
};

let printSystemData = (res, json) => {
    console.log(JSON.stringify(json.local_disk, null, 2));
    res.send(JSON.stringify(json.local_disk, null, 4));
};

let formatSystem = () => {
    const restore = {
        "local_disk": {
            "folder_1": {},
            "folder_2": {}
        }
    };
    fs.writeFileSync(fullPath, JSON.stringify(restore, null, 4));
};

let createFile = (data, folder, file, value) => {
    switch (parseInt(folder)) {
        case 1:
            if(file == 1) data.local_disk.folder_1.file_1 = value;
            if(file == 2) data.local_disk.folder_1.file_2 = value;
            if(file == 3) data.local_disk.folder_1.file_3 = value;
            if(file == 4) data.local_disk.folder_1.file_4 = value;
            if(file == 5) data.local_disk.folder_1.file_5 = value;
            break;
        case 2:
            if(file == 1) data.local_disk.folder_2.file_1 = value;
            if(file == 2) data.local_disk.folder_2.file_2 = value;
            if(file == 3) data.local_disk.folder_2.file_3 = value;
            if(file == 4) data.local_disk.folder_2.file_4 = value;
            if(file == 5) data.local_disk.folder_2.file_5 = value;
            break;
        case 3:
            if(file == 1) data.local_disk.folder_3.file_1 = value;
            if(file == 2) data.local_disk.folder_3.file_2 = value;
            if(file == 3) data.local_disk.folder_3.file_3 = value;
            if(file == 4) data.local_disk.folder_3.file_4 = value;
            if(file == 5) data.local_disk.folder_3.file_5 = value;
            break;
        case 4:
            if(file == 1) data.local_disk.folder_4.file_1 = value;
            if(file == 2) data.local_disk.folder_4.file_2 = value;
            if(file == 3) data.local_disk.folder_4.file_3 = value;
            if(file == 4) data.local_disk.folder_4.file_4 = value;
            if(file == 5) data.local_disk.folder_4.file_5 = value;
            break;
        case 5:
            if(file == 1) data.local_disk.folder_5.file_1 = value;
            if(file == 2) data.local_disk.folder_5.file_2 = value;
            if(file == 3) data.local_disk.folder_5.file_3 = value;
            if(file == 4) data.local_disk.folder_5.file_4 = value;
            if(file == 5) data.local_disk.folder_5.file_5 = value;
            break;
        default:
            if(file == 1) data.local_disk.file_1 = value;
            if(file == 2) data.local_disk.file_2 = value;
            if(file == 3) data.local_disk.file_3 = value;
            if(file == 4) data.local_disk.file_4 = value;
            if(file == 5) data.local_disk.file_5 = value;
            break;
    } fs.writeFileSync(fullPath, JSON.stringify(data, null, 4));
};

let deleteFile = (data, folder, file) => {
    switch (parseInt(folder)) {
        case 1:
            if(file == 1) data.local_disk.folder_1.file_1 = undefined;
            if(file == 2) data.local_disk.folder_1.file_2 = undefined;
            if(file == 3) data.local_disk.folder_1.file_3 = undefined;
            if(file == 4) data.local_disk.folder_1.file_4 = undefined;
            if(file == 5) data.local_disk.folder_1.file_5 = undefined;
            break;
        case 2:
            if(file == 1) data.local_disk.folder_2.file_1 = undefined;
            if(file == 2) data.local_disk.folder_2.file_2 = undefined;
            if(file == 3) data.local_disk.folder_2.file_3 = undefined;
            if(file == 4) data.local_disk.folder_2.file_4 = undefined;
            if(file == 5) data.local_disk.folder_2.file_5 = undefined;
            break;
        case 3:
            if(file == 1) data.local_disk.folder_3.file_1 = undefined;
            if(file == 2) data.local_disk.folder_3.file_2 = undefined;
            if(file == 3) data.local_disk.folder_3.file_3 = undefined;
            if(file == 4) data.local_disk.folder_3.file_4 = undefined;
            if(file == 5) data.local_disk.folder_3.file_5 = undefined;
            break;
        case 4:
            if(file == 1) data.local_disk.folder_4.file_1 = undefined;
            if(file == 2) data.local_disk.folder_4.file_2 = undefined;
            if(file == 3) data.local_disk.folder_4.file_3 = undefined;
            if(file == 4) data.local_disk.folder_4.file_4 = undefined;
            if(file == 5) data.local_disk.folder_4.file_5 = undefined;
            break;
        case 5:
            if(file == 1) data.local_disk.folder_5.file_1 = undefined;
            if(file == 2) data.local_disk.folder_5.file_2 = undefined;
            if(file == 3) data.local_disk.folder_5.file_3 = undefined;
            if(file == 4) data.local_disk.folder_5.file_4 = undefined;
            if(file == 5) data.local_disk.folder_5.file_5 = undefined;
            break;
        default:
            if(file == 1) data.local_disk.file_1 = undefined;
            if(file == 2) data.local_disk.file_2 = undefined;
            if(file == 3) data.local_disk.file_3 = undefined;
            if(file == 4) data.local_disk.file_4 = undefined;
            if(file == 5) data.local_disk.file_5 = undefined;
            break;
    } fs.writeFileSync(fullPath, JSON.stringify(data, null, 4));
};