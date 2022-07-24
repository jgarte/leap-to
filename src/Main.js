import fs from 'fs';
import os from 'os';

export function getArgs() {
    return process.argv.slice(2);
}

export function getHomedir() {
    return os.homedir();
}

export function retrieve(file) {
    return () => {
        const contents = fs.readFileSync(file, { encoding: "utf-8" })
        return JSON.parse(contents);
    };
}

export function store(data) {
    return file => () => {
        const contents = JSON.stringify(data);
        fs.writeFileSync(file, contents, { encoding: "utf-8" })
    };
}