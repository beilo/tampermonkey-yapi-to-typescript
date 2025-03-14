Tampermonkey Editors

概述
Online editor support for Tampermonkey's userscripts

This extension allows users of the Tampermonkey extension to edit their userscripts at vscode.dev
Simply click at the extension's icon in the menu bar.

Requirements:
Tampermonkey 5.0+ or Tampermonkey BETA 4.19.6176+ is required

You can get Tampermonkey from here: https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo

What is working:
 * List scripts grouped by namespace within a folder containing the script, a storage file and required scripts
 * Editing userscripts, userscript storage and required scripts
 * Editor warns on resource modification in background

What is not working (aka TODO list):
 * File and folder search
 * Global content search
 * Creating new scripts
 * Deleting scripts
 * Filter by enabled state
 * Showing new scripts created in background
 * Configuration of the used folder structure
 * Tampermonkey ESLint configuration mapped to .eslintrc file