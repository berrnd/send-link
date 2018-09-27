set projectPath=%~dp0
if %projectPath:~-1%==\ set projectPath=%projectPath:~0,-1%

set releasePath=%projectPath%\.release
mkdir "%releasePath%"

for /f "tokens=*" %%a in ('build_tools\jq.exe .version manifest.json --raw-output') do set version=%%a

del "%releasePath%\send-link_%version%.xpi"
"build_tools\7za.exe" a -r "%releasePath%\send-link_%version%.xpi" "%projectPath%\*" -xr!.* -xr!build_tools -xr!build.bat
