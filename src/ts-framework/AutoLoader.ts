/// <reference path="../../typings/main.d.ts" />

import * as fs from "fs";

/**
 * AutoLoader class
 * Responsible for require'ing all models and controllers
 */
export class AutoLoader
{
    /**
     * Directory include paths
     * @see AutoLoader#addDirectory()
     * @type {string[]}
     */
    private directories: string[] = [];

    /**
     * Add a directory to the list of auto-loaders
     * Checks if the path exists before registering it in the directory index
     * @param {string} directory
     * @returns {void}
     */
    public addDirectory(directory: string): void
    {
        if (fs.existsSync(directory)) {

        } else {
            throw new AutoLoaderException(`Directory '${directory}' does not exist!`);
        }
    }

    /**
     * Load all models/controllers into memory
     * @todo Implement AutoLoader#load()
     * @returns {void}
     */
    public load(): void
    {
        // ...
    }
}

export class AutoLoaderException implements Error {}