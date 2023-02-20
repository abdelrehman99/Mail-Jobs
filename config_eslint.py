# Script to import my eslint configaration from old project to new
import os, json

file = json.load(open('/home/abdelrehman/Documents/CarMate/package.json', 'r'))

devDependecies = ''

for key in file['devDependencies']:
    devDependecies += (key + ' ')

os.system('npm i ' + devDependecies)
