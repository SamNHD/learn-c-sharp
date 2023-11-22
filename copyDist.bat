REM robocopy ".\src\contents" ".\dist\Contents" /S /E /nfl /ndl /njh /njs
robocopy ".\src\assets" ".\dist\assets" /S /E /nfl /ndl /njh /njs
robocopy ".\dist" ".\dist\src\Contents\css" *.png *.jpg *.jpeg *.gif *.svg /nfl /ndl /njh /njs
robocopy ".\dist" "..\Training.Web\dist" /S /E /nfl /ndl /njh /njs /MIR

EXIT 0