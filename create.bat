@echo off
setlocal enabledelayedexpansion

:: Set the root directory
set "root=%cd%\marvel-api-project"

:: Create the main directory structure
mkdir "%root%\src\api"
mkdir "%root%\src\components"
mkdir "%root%\src\styles"
mkdir "%root%\src\utils"
mkdir "%root%\public\assets\images"
mkdir "%root%\tests"

:: Create empty files
type nul > "%root%\src\api\marvel.js"
type nul > "%root%\src\components\CharacterCard.js"
type nul > "%root%\src\styles\main.css"
type nul > "%root%\src\utils\helpers.js"
type nul > "%root%\src\app.js"
type nul > "%root%\src\config.js"
type nul > "%root%\src\index.html"
type nul > "%root%\public\assets\images\placeholder.png"
type nul > "%root%\tests\api.test.js"
type nul > "%root%\.gitignore"
type nul > "%root%\package.json"
type nul > "%root%\README.md"

:: Add some basic content to files
echo // Marvel API functions > "%root%\src\api\marvel.js"
echo // Character Card component > "%root%\src\components\CharacterCard.js"
echo /* Main styles */ > "%root%\src\styles\main.css"
echo // Helper functions > "%root%\src\utils\helpers.js"
echo // Main application logic > "%root%\src\app.js"
echo // Configuration settings > "%root%\src\config.js"
echo ^<!DOCTYPE html^>^<html lang="en"^>^<head^>^<meta charset="UTF-8"^>^<title^>Marvel API Project^</title^>^</head^>^<body^>^<div id="app"^>^</div^>^</body^>^</html^> > "%root%\src\index.html"
echo // API tests > "%root%\tests\api.test.js"
echo node_modules/ > "%root%\.gitignore"
echo { "name": "marvel-api-project", "version": "1.0.0", "description": "A project using the Marvel API" } > "%root%\package.json"
echo # Marvel API Project > "%root%\README.md"

echo Project structure created successfully!
