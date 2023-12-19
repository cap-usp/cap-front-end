#!/bin/bash
echo "#commits na main: $(git rev-list --count main)"
echo "#commits ao todo: $(git rev-list --all --count)"
echo "#arquivos: $(git ls-files | wc -l)"
echo "#LoC: $(git ls-files | xargs cat | wc -l)"
